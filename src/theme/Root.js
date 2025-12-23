import React, { useEffect } from "react";
import { useLocation } from "@docusaurus/router";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import {
  trackPageView,
  initAmplitude,
  trackDocSection,
} from "../utils/amplitude";
import "../utils/clientModules";

export default function Root({ children }) {
  const location = useLocation();
  const { siteConfig } = useDocusaurusContext();

  // Initialize Amplitude on mount
  useEffect(() => {
    // Get API key from site config or environment variables
    const apiKey =
      siteConfig.customFields?.AMPLITUDE_API_KEY ||
      process.env.REACT_APP_AMPLITUDE_API_KEY;

    if (apiKey) {
      initAmplitude(apiKey);
    } else {
      console.warn(
        "Amplitude API key not found. Set AMPLITUDE_API_KEY in customFields or REACT_APP_AMPLITUDE_API_KEY environment variable.",
      );
    }
  }, [siteConfig]);

  // Track page views on route changes
  useEffect(() => {
    // Small delay to ensure page title is updated
    const timer = setTimeout(() => {
      trackPageView();

      // Track specific documentation sections
      const path = location.pathname;
      console.log("path", path);
      if (path.includes("/auth-flow")) {
        trackDocSection("Authentication Flow");
      } else if (path.includes("/bank-feeds")) {
        trackDocSection("Bank Feeds");
      } else if (path.includes("/commerce")) {
        trackDocSection("Commerce");
      } else if (path.includes("/lending")) {
        trackDocSection("Lending");
      } else if (path.includes("/payables")) {
        trackDocSection("Payables");
      } else if (path.includes("/payroll")) {
        trackDocSection("Payroll");
      } else if (path.includes("/expenses")) {
        trackDocSection("Expenses");
      } else if (path.includes("/using-the-api")) {
        trackDocSection("Using the API");
      } else if (path.includes("/get-started")) {
        trackDocSection("Get Started");
      } else if (path.includes("/integrations")) {
        trackDocSection("Integrations");
      } else if (path.includes("/usecases")) {
        trackDocSection("Use Cases");
      } else if (path.includes("/updates")) {
        trackDocSection("Updates/Blog");
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return <>{children}</>;
}
