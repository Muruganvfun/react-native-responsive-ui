import { useState, useEffect } from 'react';
import { useWindowDimensions, ScaledSize, Dimensions } from 'react-native';

export type Breakpoint = 'mobile' | 'tablet' | 'desktop';

export interface BreakpointInfo {
  breakpoint: Breakpoint;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  width: number;
  height: number;
}

const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
};

export const getBreakpoint = (width: number): Breakpoint => {
  if (width < BREAKPOINTS.mobile) return 'mobile';
  if (width <= BREAKPOINTS.tablet) return 'tablet';
  return 'desktop';
};

export const useBreakpoint = (): BreakpointInfo => {
  const { width, height } = useWindowDimensions();
  const breakpoint = getBreakpoint(width);

  return {
    breakpoint,
    isMobile: breakpoint === 'mobile',
    isTablet: breakpoint === 'tablet',
    isDesktop: breakpoint === 'desktop',
    width,
    height,
  };
};

export const responsiveValue = <T>(
  breakpoint: Breakpoint,
  values: { mobile: T; tablet?: T; desktop?: T }
): T => {
  if (breakpoint === 'mobile') return values.mobile;
  if (breakpoint === 'tablet') return values.tablet ?? values.mobile;
  return values.desktop ?? values.tablet ?? values.mobile;
};

export default useBreakpoint;
