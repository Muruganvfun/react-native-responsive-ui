import { StyleSheet, DimensionValue } from 'react-native';
import { Breakpoint } from '../hooks/useBreakpoint';

export const colors = {
  primary: '#355493',
  background: '#fafafa',
  white: '#fff',
  black: '#000',
  gray: '#727272',
  lightGray: '#a1a1a1',
  darkGray: '#3d3d3d',
  sidebarBg: '#f1f1f1',
};

export const shadows = {
  card: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  pill: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  searchBar: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
};

// Spacing constants matching EMA_CSS_v1.txt
export const spacing = {
  desktop: {
    padding: 40,
    maxWidth: 800,
    gap: 30,
    sidebarWidth: 70,
  },
  tablet: {
    padding: 24,
    maxWidth: 650,
    gap: 24,
    sidebarWidth: 70,
  },
  mobile: {
    padding: 16,
    maxWidth: '100%' as const,
    gap: 20,
    sidebarWidth: 0,
  },
};

export const baseStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});

export const getResponsiveStyles = (breakpoint: Breakpoint) => {
  const isMobile = breakpoint === 'mobile';
  const isTablet = breakpoint === 'tablet';
  const isDesktop = breakpoint === 'desktop';

  return StyleSheet.create({
    contentContainer: {
      width: '100%',
      maxWidth: (isDesktop ? spacing.desktop.maxWidth : isTablet ? spacing.tablet.maxWidth : spacing.mobile.maxWidth) as DimensionValue,
      paddingHorizontal: isDesktop ? spacing.desktop.padding : isTablet ? spacing.tablet.padding : spacing.mobile.padding,
      paddingTop: isDesktop ? 40 : isTablet ? 32 : 24,
      paddingBottom: isDesktop ? 60 : isTablet ? 40 : 80,
      alignSelf: 'center',
      gap: isDesktop ? spacing.desktop.gap : isTablet ? spacing.tablet.gap : spacing.mobile.gap,
    },
    mainContentOffset: {
      marginLeft: isMobile ? 0 : spacing.desktop.sidebarWidth,
    },
    headlineResponsive: {
      fontSize: isDesktop ? 32 : isTablet ? 28 : 24,
      lineHeight: isDesktop ? 40 : isTablet ? 36 : 30,
    },
    promptBarResponsive: {
      minHeight: isDesktop ? 130 : isTablet ? 110 : 100,
      width: '100%',
      maxWidth: isDesktop ? 550 : isTablet ? 500 : '100%',
    },
    actionCardResponsive: {
      width: isMobile ? '100%' : isTablet ? '48%' : '31%',
      minWidth: isMobile ? '100%' : 200,
    },
    learningCardResponsive: {
      width: isMobile ? '100%' : '48%',
      minWidth: isMobile ? '100%' : 280,
    },
    cardsLayoutResponsive: {
      flexDirection: isMobile ? 'column' : 'row',
      flexWrap: 'wrap',
    },
    learningLayoutResponsive: {
      flexDirection: isMobile ? 'column' : 'row',
      flexWrap: 'wrap',
    },
    headerDesktopNav: {
      display: isMobile ? 'none' : 'flex',
    },
    headerMobileMenu: {
      display: isMobile ? 'flex' : 'none',
    },
    sidebarVisible: {
      display: isMobile ? 'none' : 'flex',
    },
    bottomNavVisible: {
      display: isMobile ? 'flex' : 'none',
    },
  });
};

export default baseStyles;
