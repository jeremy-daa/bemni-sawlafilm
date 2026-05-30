'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isHoveringThemeColor, setIsHoveringThemeColor] = useState(false);
  const [isLightBg, setIsLightBg] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on desktop/devices with fine pointers
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const mouseMoveHandler = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const mouseOverHandler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      // Check if the target is clickable or inside a clickable element
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        window.getComputedStyle(target).cursor === 'pointer'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }

      // Check if hovering specifically over a gold/ember branded background
      const closestEmber = target.closest('.bg-ember') || target.closest('.bg-gold');
      setIsHoveringThemeColor(!!closestEmber);

      // Check background theme of the section we are over to adjust cursor color
      let current: HTMLElement | null = target;
      let foundLight = false;
      let foundDark = false;

      while (current) {
        const classes = current.classList;
        if (classes) {
          if (
            classes.contains('bg-cream') ||
            classes.contains('bg-warm') ||
            classes.contains('bg-white') ||
            classes.contains('bg-gold-pale') ||
            classes.contains('bg-teal-pale') ||
            classes.contains('bg-teal-light')
          ) {
            foundLight = true;
            break;
          }
          if (
            classes.contains('bg-ink') ||
            classes.contains('bg-ash') ||
            classes.contains('bg-graphite') ||
            classes.contains('bg-charcoal') ||
            classes.contains('bg-steel') ||
            classes.contains('bg-[#050505]') ||
            classes.contains('bg-[#0A0A0A]')
          ) {
            foundDark = true;
            break;
          }
        }

        // Fallback check for string inclusions and specific elements
        const className = current.className || '';
        if (typeof className === 'string') {
          if (
            className.includes('bg-cream') ||
            className.includes('bg-warm') ||
            className.includes('bg-[#EDEBE5]')
          ) {
            foundLight = true;
            break;
          }
          if (
            className.includes('bg-ink') ||
            className.includes('bg-ash') ||
            className.includes('bg-graphite') ||
            className.includes('bg-charcoal') ||
            className.includes('bg-[#050505]') ||
            className.includes('bg-[#0A0A0A]') ||
            current.tagName.toLowerCase() === 'nav' ||
            current.id === 'mobile-nav'
          ) {
            foundDark = true;
            break;
          }
        }

        current = current.parentElement;
      }

      if (foundLight) {
        setIsLightBg(true);
      } else if (foundDark) {
        setIsLightBg(false);
      }
    };

    const mouseLeaveHandler = () => {
      setIsVisible(false);
    };

    const mouseEnterHandler = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', mouseMoveHandler);
    window.addEventListener('mouseover', mouseOverHandler);
    document.addEventListener('mouseleave', mouseLeaveHandler);
    document.addEventListener('mouseenter', mouseEnterHandler);

    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler);
      window.removeEventListener('mouseover', mouseOverHandler);
      document.removeEventListener('mouseleave', mouseLeaveHandler);
      document.removeEventListener('mouseenter', mouseEnterHandler);
    };
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      document.body.classList.add('hide-native-cursor');
    } else {
      document.body.classList.remove('hide-native-cursor');
    }
    
    return () => {
      document.body.classList.remove('hide-native-cursor');
    };
  }, [isVisible]);

  if (!isVisible) return null;

  // Colors based on theme context
  const colorGold = '#D3B03A';
  const colorDark = '#0A0A0A';
  const colorWhite = '#FFFFFF';

  // Inner dot color
  const dotBg = isLightBg ? colorDark : colorGold;

  // Outer ring border color
  let ringBorderColor = isLightBg ? colorDark : colorGold;
  if (isHoveringThemeColor) {
    ringBorderColor = colorWhite;
  }

  // Outer ring background fill on hover (keeping it highly semi-transparent to prevent covering text)
  let ringBgColor = 'rgba(211, 176, 58, 0)';
  if (isHoveringThemeColor) {
    ringBgColor = isHovering ? 'rgba(255, 255, 255, 0.18)' : 'rgba(255, 255, 255, 0)';
  } else if (isLightBg) {
    ringBgColor = isHovering ? 'rgba(10, 10, 10, 0.08)' : 'rgba(10, 10, 10, 0)';
  } else {
    ringBgColor = isHovering ? 'rgba(211, 176, 58, 0.12)' : 'rgba(211, 176, 58, 0)';
  }


  return (
    <>
      {/* Tiny solid dot that instantly follows the cursor */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full pointer-events-none z-[9999] shadow-[0_1px_3px_rgba(0,0,0,0.22)]"
        style={{ 
          x: mousePosition.x - 5, 
          y: mousePosition.y - 5,
        }}
        animate={{
          scale: isHovering ? 0 : 1,
          opacity: isVisible ? 1 : 0,
          backgroundColor: dotBg,
        }}
        transition={{ duration: 0.15, ease: 'easeOut' }}
      />
      
      {/* Outer ring that smoothly follows with spring physics */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border-[1.5px] rounded-full pointer-events-none z-[9998] shadow-[0_1px_2px_rgba(0,0,0,0.1)]"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.5 : 1,
          borderColor: ringBorderColor,
          backgroundColor: ringBgColor,
          opacity: isVisible ? 1 : 0
        }}
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 250,
          mass: 0.5,
          scale: { type: 'spring', damping: 20, stiffness: 300 }
        }}
      />
    </>
  );
}
