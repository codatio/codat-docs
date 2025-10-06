import * as amplitude from "@amplitude/analytics-browser";

// Configuration
const AMPLITUDE_CONFIG = {
  fetchRemoteConfig: true,
  autocapture: {
    pageViews: true,
    sessions: true,
    formInteractions: true,
    fileDownloads: true,
    elementInteractions: true,
  },
  minIdLength: 5,
  flushIntervalMillis: 1000,
  logLevel:
    typeof window !== "undefined" && window.location?.hostname === "localhost"
      ? "Debug"
      : "Warn",
};

let isInitialized = false;

/**
 * Initialize Amplitude tracking
 * @param {string} apiKey - Amplitude API key
 * @param {string} [userId] - Optional user ID
 * @param {object} [options] - Additional configuration options
 */
export function initAmplitude(apiKey, userId = null, options = {}) {
  if (typeof window === "undefined" || isInitialized || !apiKey) {
    return;
  }

  try {
    const config = { ...AMPLITUDE_CONFIG, ...options };

    if (userId) {
      amplitude.init(apiKey, userId, config);
    } else {
      amplitude.init(apiKey, config);
    }

    isInitialized = true;
    console.log("Amplitude initialized successfully");
  } catch (error) {
    console.error("Failed to initialize Amplitude:", error);
  }
}

/**
 * Track a custom event
 * @param {string} eventName - Name of the event
 * @param {object} [properties] - Event properties
 */
export function trackEvent(eventName, properties = {}) {
  if (!isInitialized || typeof window === "undefined") {
    return;
  }

  try {
    amplitude.track(eventName, {
      ...properties,
      timestamp: Date.now(),
      page_url: window.location.href,
      page_title: document.title,
    });
  } catch (error) {
    console.error("Failed to track event:", error);
  }
}

/**
 * Track page view
 * @param {string} [pageName] - Optional page name override
 * @param {object} [properties] - Additional properties
 */
export function trackPageView(pageName = null, properties = {}) {
  if (!isInitialized || typeof window === "undefined") {
    return;
  }

  const page = pageName || document.title || window.location.pathname;

  trackEvent("Page View", {
    page_name: page,
    page_path: window.location.pathname,
    page_url: window.location.href,
    referrer: document.referrer || "direct",
    ...properties,
  });
}

/**
 * Track documentation section visits
 * @param {string} section - Documentation section name
 * @param {object} [properties] - Additional properties
 */
export function trackDocSection(section, properties = {}) {
  trackEvent("Documentation Section Viewed", {
    section,
    ...properties,
  });
}

/**
 * Track search queries
 * @param {string} query - Search query
 * @param {number} [resultsCount] - Number of results
 * @param {object} [properties] - Additional properties
 */
export function trackSearch(query, resultsCount = null, properties = {}) {
  trackEvent("Search Performed", {
    search_query: query,
    results_count: resultsCount,
    ...properties,
  });
}

/**
 * Track link clicks
 * @param {string} linkUrl - URL of the clicked link
 * @param {string} [linkText] - Text of the link
 * @param {string} [linkType] - Type of link (internal, external, etc.)
 * @param {object} [properties] - Additional properties
 */
export function trackLinkClick(
  linkUrl,
  linkText = null,
  linkType = "unknown",
  properties = {},
) {
  trackEvent("Link Clicked", {
    link_url: linkUrl,
    link_text: linkText,
    link_type: linkType,
    ...properties,
  });
}

/**
 * Track code example interactions
 * @param {string} language - Programming language
 * @param {string} action - Action performed (copy, run, etc.)
 * @param {object} [properties] - Additional properties
 */
export function trackCodeExample(language, action, properties = {}) {
  trackEvent("Code Example Interaction", {
    language,
    action,
    ...properties,
  });
}

/**
 * Set user properties
 * @param {object} properties - User properties to set
 */
export function setUserProperties(properties) {
  if (!isInitialized || typeof window === "undefined") {
    return;
  }

  try {
    amplitude.identify(new amplitude.Identify().set(properties));
  } catch (error) {
    console.error("Failed to set user properties:", error);
  }
}

/**
 * Set user ID
 * @param {string} userId - User ID
 */
export function setUserId(userId) {
  if (!isInitialized || typeof window === "undefined") {
    return;
  }

  try {
    amplitude.setUserId(userId);
  } catch (error) {
    console.error("Failed to set user ID:", error);
  }
}

/**
 * Reset user session (logout)
 */
export function resetUser() {
  if (!isInitialized || typeof window === "undefined") {
    return;
  }

  try {
    amplitude.reset();
  } catch (error) {
    console.error("Failed to reset user:", error);
  }
}

// Export amplitude instance for advanced usage
export { amplitude };

// Check if we're in a browser environment and auto-initialize if API key is available
if (typeof window !== "undefined") {
  // You can set the API key via environment variable or global variable
  const apiKey =
    process.env.REACT_APP_AMPLITUDE_API_KEY || window.AMPLITUDE_API_KEY;

  if (apiKey) {
    // Initialize on page load
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => {
        initAmplitude(apiKey);
      });
    } else {
      initAmplitude(apiKey);
    }
  }
}
