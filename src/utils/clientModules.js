import { trackEvent, trackSearch, trackCodeExample } from "./amplitude";

// Track search interactions with Typesense
function setupSearchTracking() {
  // Wait for the search box to be available
  const searchObserver = new MutationObserver(() => {
    console.log("observer");
    const searchInput = document.querySelector(
      'input[placeholder*="Search"], input[type="search"], .DocSearch-Input',
    );

    if (searchInput && !searchInput.hasAttribute("data-amplitude-tracked")) {
      console.log("track");
      searchInput.setAttribute("data-amplitude-tracked", "true");

      let searchTimeout;

      searchInput.addEventListener("input", (e) => {
        const query = e.target.value;

        // Debounce search tracking to avoid too many events
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
          if (query.length >= 3) {
            // Count visible results if possible
            const resultsContainer = document.querySelector(
              ".DocSearch-Dropdown, .typesense-search-results",
            );
            let resultsCount = null;

            if (resultsContainer) {
              const results = resultsContainer.querySelectorAll(
                ".DocSearch-Hit, .search-result-item",
              );
              resultsCount = results.length;
            }

            trackSearch(query, resultsCount, {
              search_method: "typesense",
              search_context: "documentation",
            });
          }
        }, 1000);
      });

      // Track search result clicks
      document.addEventListener("click", (e) => {
        const searchHit = e.target.closest(
          ".DocSearch-Hit, .search-result-item",
        );
        if (searchHit) {
          const title =
            searchHit.querySelector(".DocSearch-Hit-title, .result-title")
              ?.textContent || "Unknown";
          const url = searchHit.querySelector("a")?.href || "Unknown";

          trackEvent("Search Result Clicked", {
            result_title: title,
            result_url: url,
            search_method: "typesense",
          });
        }
      });
    }
  });

  // Start observing
  searchObserver.observe(document.body, {
    childList: true,
    subtree: true,
  });

  // Stop observing after a reasonable time
  setTimeout(() => searchObserver.disconnect(), 10000);
}

// Track code block interactions
function setupCodeBlockTracking() {
  document.addEventListener("click", (e) => {
    // Track copy button clicks in code blocks
    if (
      e.target.closest(
        'button[title*="Copy"], .copy-button, [class*="copyButton"]',
      )
    ) {
      const codeBlock = e.target.closest("pre, .prism-code, .codeBlock");
      let language = "unknown";

      if (codeBlock) {
        // Try to extract language from class names
        const classNames = codeBlock.className || "";
        const langMatch = classNames.match(/language-(\w+)|prism-(\w+)/);
        if (langMatch) {
          language = langMatch[1] || langMatch[2];
        }
      }

      trackCodeExample(language, "copy", {
        component: "code_block",
      });
    }

    // Track playground interactions
    if (
      e.target.closest(
        ".playground-container, .stackblitz-button, .codesandbox-button",
      )
    ) {
      const playgroundElement = e.target.closest(".playground-container");
      let language = "unknown";

      if (playgroundElement) {
        const langElement = playgroundElement.querySelector("[data-language]");
        if (langElement) {
          language = langElement.getAttribute("data-language");
        }
      }

      trackCodeExample(language, "playground_interaction", {
        component: "playground",
      });
    }
  });
}

// Track scroll depth
function setupScrollTracking() {
  let maxScroll = 0;
  let scrollMarkers = [25, 50, 75, 90, 100];
  let trackedMarkers = new Set();

  function trackScrollDepth() {
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollPercent = Math.round((scrollTop / scrollHeight) * 100);

    maxScroll = Math.max(maxScroll, scrollPercent);

    // Track scroll milestones
    scrollMarkers.forEach((marker) => {
      if (maxScroll >= marker && !trackedMarkers.has(marker)) {
        trackedMarkers.add(marker);
        trackEvent("Scroll Depth", {
          scroll_depth: marker,
          page_url: window.location.href,
          page_title: document.title,
        });
      }
    });
  }

  // Throttle scroll events
  let scrollTimeout;
  window.addEventListener("scroll", () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(trackScrollDepth, 250);
  });

  // Track final scroll depth on page unload
  window.addEventListener("beforeunload", () => {
    if (maxScroll > 0) {
      trackEvent("Page Exit", {
        final_scroll_depth: maxScroll,
        time_on_page: Date.now() - (window.pageLoadTime || Date.now()),
      });
    }
  });
}

// Track time on page
function setupTimeTracking() {
  window.pageLoadTime = Date.now();

  // Track reading milestones
  const readingMilestones = [30000, 60000, 120000, 300000]; // 30s, 1m, 2m, 5m
  const trackedMilestones = new Set();

  readingMilestones.forEach((milestone) => {
    setTimeout(() => {
      if (!trackedMilestones.has(milestone)) {
        trackedMilestones.add(milestone);
        trackEvent("Reading Milestone", {
          time_on_page: milestone,
          milestone_seconds: milestone / 1000,
        });
      }
    }, milestone);
  });
}

// Track form interactions (if any)
function setupFormTracking() {
  document.addEventListener("submit", (e) => {
    const form = e.target;
    if (form.tagName === "FORM") {
      const formId = form.id || form.className || "unknown";
      trackEvent("Form Submitted", {
        form_id: formId,
        form_action: form.action || "unknown",
      });
    }
  });

  // Track newsletter signups, contact forms, etc.
  document.addEventListener("click", (e) => {
    if (e.target.matches('button[type="submit"], input[type="submit"]')) {
      const form = e.target.closest("form");
      if (form) {
        const formId = form.id || form.className || "unknown";
        trackEvent("Form Submit Attempted", {
          form_id: formId,
        });
      }
    }
  });
}

// Track external link clicks
function setupExternalLinkTracking() {
  document.addEventListener("click", (e) => {
    const link = e.target.closest("a");
    if (link && link.href) {
      const isExternal = link.hostname !== window.location.hostname;
      const isNewTab = link.target === "_blank";

      if (isExternal) {
        trackEvent("External Link Clicked", {
          link_url: link.href,
          link_text: link.textContent || link.title || "Unknown",
          opens_new_tab: isNewTab,
          link_domain: link.hostname,
        });
      }
    }
  });
}

// Initialize all tracking when DOM is ready
function initializeClientTracking() {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      setupSearchTracking();
      setupCodeBlockTracking();
      setupScrollTracking();
      setupTimeTracking();
      setupFormTracking();
      setupExternalLinkTracking();
    });
  } else {
    setupSearchTracking();
    setupCodeBlockTracking();
    setupScrollTracking();
    setupTimeTracking();
    setupFormTracking();
    setupExternalLinkTracking();
  }
}

// Auto-initialize if in browser
if (typeof window !== "undefined") {
  initializeClientTracking();
}

export {
  setupSearchTracking,
  setupCodeBlockTracking,
  setupScrollTracking,
  setupTimeTracking,
  setupFormTracking,
  setupExternalLinkTracking,
  initializeClientTracking,
};
