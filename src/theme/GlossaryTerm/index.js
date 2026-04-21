import React, { useMemo, useState, useRef, useEffect, useCallback } from 'react';
import { usePluginData } from '@docusaurus/useGlobalData';
import styles from './styles.module.css';

export default function GlossaryTerm({ term, definition, routePath = '/glossary', children }) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipStyle, setTooltipStyle] = useState(null);
  const [placement, setPlacement] = useState('top');
  const [isInsideLink, setIsInsideLink] = useState(false);
  const wrapperRef = useRef(null);
  const tooltipRef = useRef(null);

  // Check if this term is rendered inside an existing <a> tag
  useEffect(() => {
    if (wrapperRef.current) {
      const parentLink = wrapperRef.current.parentElement?.closest('a');
      setIsInsideLink(!!parentLink);
    }
  }, []);

  const updatePosition = useCallback(() => {
    if (!wrapperRef.current || !tooltipRef.current) return;
    const wrapperRect = wrapperRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const preferredGap = 8;

    const hasSpaceAbove = wrapperRect.top >= tooltipRect.height + preferredGap;
    const hasSpaceBelow = viewportHeight - wrapperRect.bottom >= tooltipRect.height + preferredGap;
    const nextPlacement = hasSpaceAbove || !hasSpaceBelow ? 'top' : 'bottom';

    let top;
    if (nextPlacement === 'top') {
      top = wrapperRect.top - tooltipRect.height - preferredGap;
    } else {
      top = wrapperRect.bottom + preferredGap;
    }

    const horizontalMargin = 8;
    let left = wrapperRect.left + wrapperRect.width / 2 - tooltipRect.width / 2;
    left = Math.max(
      horizontalMargin,
      Math.min(left, viewportWidth - tooltipRect.width - horizontalMargin)
    );

    setPlacement(nextPlacement);
    setTooltipStyle({ top: Math.max(4, top), left });
  }, []);

  useEffect(() => {
    if (!showTooltip) return;

    let rafId2;
    const rafId1 = requestAnimationFrame(() => {
      rafId2 = requestAnimationFrame(() => {
        updatePosition();
      });
    });

    const onScroll = () => updatePosition();
    const onResize = () => updatePosition();
    window.addEventListener('scroll', onScroll, true);
    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(rafId1);
      if (rafId2) cancelAnimationFrame(rafId2);
      window.removeEventListener('scroll', onScroll, true);
      window.removeEventListener('resize', onResize);
    };
  }, [showTooltip, updatePosition]);

  const pluginData = usePluginData('docusaurus-plugin-glossary');
  const effectiveDefinition = useMemo(() => {
    if (definition && typeof definition === 'string' && definition.length > 0) {
      return definition;
    }
    const terms = (pluginData && pluginData.terms) || [];
    const found = terms.find(
      t => typeof t.term === 'string' && t.term.toLowerCase() === String(term).toLowerCase()
    );
    return found && found.definition ? found.definition : undefined;
  }, [definition, pluginData, term]);

  const effectiveRoutePath = useMemo(() => {
    if (routePath && typeof routePath === 'string' && routePath.length > 0) return routePath;
    return (pluginData && pluginData.routePath) || '/glossary';
  }, [pluginData, routePath]);

  const displayText = children || term;
  const termId = term.toLowerCase().replace(/\s+/g, '-');

  const tooltipContent = effectiveDefinition && (
    <span
      ref={tooltipRef}
      id={`tooltip-${termId}`}
      className={
        `${styles.tooltip} ${showTooltip ? styles.tooltipVisible : ''} ` +
        `${placement === 'top' ? styles.tooltipTop : styles.tooltipBottom} ` +
        `${styles.tooltipFloating}`
      }
      role="tooltip"
      style={
        showTooltip && tooltipStyle
          ? { top: `${tooltipStyle.top}px`, left: `${tooltipStyle.left}px` }
          : undefined
      }
    >
      <strong>{term}</strong> {effectiveDefinition}
    </span>
  );

  // If inside a link, render as span to avoid nested <a> tags
  if (isInsideLink) {
    return (
      <span ref={wrapperRef} className={styles.glossaryTermWrapper}>
        <span
          className={styles.glossaryTerm}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          onFocus={() => setShowTooltip(true)}
          onBlur={() => setShowTooltip(false)}
          aria-describedby={`tooltip-${termId}`}
        >
          {displayText}
        </span>
        {tooltipContent}
      </span>
    );
  }

  return (
    <span ref={wrapperRef} className={styles.glossaryTermWrapper}>
      <a
        href={`${effectiveRoutePath}#${termId}`}
        className={styles.glossaryTerm}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onFocus={() => setShowTooltip(true)}
        onBlur={() => setShowTooltip(false)}
        aria-describedby={`tooltip-${termId}`}
      >
        {displayText}
      </a>
      {tooltipContent}
    </span>
  );
}
