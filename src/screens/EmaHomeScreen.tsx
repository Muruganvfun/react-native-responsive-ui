import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  SafeAreaView,
  DimensionValue,
  Platform,
  Image,
} from 'react-native';
import useBreakpoint, { Breakpoint } from '../hooks/useBreakpoint';
import { colors } from '../styles/styles';
import {
  HomeIcon,
  AgentIcon,
  FlowIcon,
  ToolsIcon,
  MoreIcon,
  SettingsIcon,
  MicIcon,
  SendIcon,
  AgentToggleIcon,
  WorkflowIcon,
  WiproLogo,
} from '../components/Icons';

// Card images - matching requirements exactly
const cardWorkflowImage = require('../../assets/images/card-workflow.png');
const cardAutonomousImage = require('../../assets/images/card-autonomous.png');
const cardComputerImage = require('../../assets/images/card-computer.png');

// ============================================
// DATA
// ============================================

const NAV_ITEMS = [
  { id: 'home', label: 'Home', icon: HomeIcon, active: true },
  { id: 'agent', label: 'Agent', icon: AgentIcon, active: false },
  { id: 'flow', label: 'Flow', icon: FlowIcon, active: false },
  { id: 'tools', label: 'Tools', icon: ToolsIcon, active: false },
  { id: 'more', label: 'More', icon: MoreIcon, active: false },
];

const ACTION_CARDS = [
  {
    id: 'workflow',
    title: 'Create workflow',
    description: 'Streamlined automation boosts productivity and ensures robust protection.',
    image: cardWorkflowImage,
  },
  {
    id: 'autonomous',
    title: 'Create autonomous agent',
    description: 'Intelligent automation accelerates efficiency and upholds superior safety',
    image: cardAutonomousImage,
  },
  {
    id: 'computer',
    title: 'Computer-using agent',
    description: 'Integrated automation optimizes workflows and guarantees first-rate security.',
    image: cardComputerImage,
  },
];

const LEARNING_RESOURCES = [
  { id: '1', text: 'Dynamic automation accelerates your processes while prioritizing ease' },
  { id: '2', text: 'Efficient automation enhances your workflows with a focus on simplicity' },
  { id: '3', text: 'Cutting-edge technology that seamlessly integrates with your workflow.' },
  { id: '4', text: 'Improved collaboration tools that elevate team efficiency.' },
  { id: '5', text: 'Comprehensive analytics solutions to monitor performance and enhance results.' },
  { id: '6', text: 'Intuitive interface crafted for an effortless user experience.' },
];

// ============================================
// RESPONSIVE STYLES HELPER
// ============================================

const getResponsiveStyles = (breakpoint: Breakpoint) => {
  const isMobile = breakpoint === 'mobile';
  const isTablet = breakpoint === 'tablet';
  const isDesktop = breakpoint === 'desktop';

  // Content width - wider per defect annotation (input field needs to be wider)
  const contentWidth = isMobile ? '100%' : isTablet ? 700 : 900;

  return {
    // Container
    containerPadding: isMobile ? 16 : isTablet ? 24 : 40,
    contentMaxWidth: contentWidth as DimensionValue,
    contentGap: isMobile ? 24 : 30,
    
    // Sidebar
    showSidebar: !isMobile,
    sidebarWidth: 70,
    
    // Sidebar icon size - larger to match Desktop.jpg
    sidebarIconSize: isMobile ? 22 : 24,
    
    // Hero
    headlineFontSize: isMobile ? 24 : isTablet ? 28 : 32,
    headlineLineHeight: isMobile ? 30 : isTablet ? 36 : 40,
    
    // Prompt bar - wider per defect annotation
    promptBarMaxWidth: contentWidth as DimensionValue,
    promptBarHeight: isMobile ? 100 : isTablet ? 110 : 130,
    
    // Cards
    cardsPerRow: isMobile ? 1 : isTablet ? 2 : 3,
    cardWidth: (isMobile ? '100%' : isTablet ? '48%' : '31%') as DimensionValue,
    cardImageHeight: isMobile ? 140 : isTablet ? 130 : 120,
    
    // Learning resources
    learningCardsPerRow: isMobile ? 1 : 2,
    learningCardWidth: (isMobile ? '100%' : '48%') as DimensionValue,
  };
};

// ============================================
// COMPONENTS
// ============================================

interface HeaderProps {
  breakpoint: Breakpoint;
}

const Header: React.FC<HeaderProps> = ({ breakpoint }) => {
  const isMobile = breakpoint === 'mobile';

  return (
    <View style={styles.header}>
      <View style={styles.headerLogo}>
        <WiproLogo width={60} height={24} />
        <View style={styles.logoDot} />
        <Text style={styles.logoText}>WINGS Studio</Text>
      </View>
      
      {isMobile ? (
        <TouchableOpacity style={styles.headerMenuButton}>
          <Text style={styles.headerMenuIcon}>+</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.headerNav}>
          <TouchableOpacity><Text style={styles.headerNavText}>Setting</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.headerNavText}>FAQ</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.headerNavText}>User</Text></TouchableOpacity>
        </View>
      )}
    </View>
  );
};

interface SidebarProps {
  breakpoint: Breakpoint;
}

const Sidebar: React.FC<SidebarProps> = ({ breakpoint }) => {
  if (breakpoint === 'mobile') return null;
  const responsive = getResponsiveStyles(breakpoint);

  return (
    <View style={styles.sidebar}>
      {NAV_ITEMS.map((item) => {
        const IconComponent = item.icon;
        return (
          <TouchableOpacity
            key={item.id}
            style={[styles.sidebarItem, item.active && styles.sidebarItemActive]}
          >
            <IconComponent size={responsive.sidebarIconSize} color={item.active ? '#fff' : '#333'} />
            <Text style={[styles.sidebarText, item.active && styles.sidebarTextActive]}>
              {item.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

interface ModeToggleProps {
  selectedMode: 'agent' | 'workflow';
  onModeChange: (mode: 'agent' | 'workflow') => void;
}

const ModeToggle: React.FC<ModeToggleProps> = ({ selectedMode, onModeChange }) => {
  return (
    <View style={styles.modeToggle}>
      <TouchableOpacity
        style={[styles.modeTogglePill, selectedMode === 'agent' && styles.modeTogglePillSelected]}
        onPress={() => onModeChange('agent')}
      >
        <AgentToggleIcon size={16} color={selectedMode === 'agent' ? '#fff' : '#555'} />
        <Text style={[styles.modeToggleText, selectedMode === 'agent' && styles.modeToggleTextSelected]}>
          Agent
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={[styles.modeTogglePill, selectedMode === 'workflow' && styles.modeTogglePillSelected]}
        onPress={() => onModeChange('workflow')}
      >
        <WorkflowIcon size={16} color={selectedMode === 'workflow' ? '#fff' : '#555'} />
        <Text style={[styles.modeToggleText, selectedMode === 'workflow' && styles.modeToggleTextSelected]}>
          Workflow
        </Text>
      </TouchableOpacity>
    </View>
  );
};

interface PromptBarProps {
  breakpoint: Breakpoint;
}

const PromptBar: React.FC<PromptBarProps> = ({ breakpoint }) => {
  const [text, setText] = useState('');
  const responsive = getResponsiveStyles(breakpoint);

  return (
    <View style={[styles.promptBar, { maxWidth: responsive.promptBarMaxWidth, minHeight: responsive.promptBarHeight }]}>
      <TextInput
        style={styles.promptInput}
        placeholder="Start building by describing what your agent needs to do"
        placeholderTextColor="#888"
        value={text}
        onChangeText={setText}
        multiline
      />
      <View style={styles.promptActions}>
        <TouchableOpacity style={styles.promptIconButton}>
          <SettingsIcon size={22} color="#757575" />
        </TouchableOpacity>
        <View style={styles.promptRightActions}>
          <TouchableOpacity style={styles.promptIconButton}>
            <MicIcon size={18} color="#757575" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.promptSendButton}>
            <SendIcon size={30} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

interface HeroSectionProps {
  breakpoint: Breakpoint;
  selectedMode: 'agent' | 'workflow';
  onModeChange: (mode: 'agent' | 'workflow') => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ breakpoint, selectedMode, onModeChange }) => {
  const responsive = getResponsiveStyles(breakpoint);

  return (
    <View style={styles.heroSection}>
      <Text style={[styles.headline, { fontSize: responsive.headlineFontSize, lineHeight: responsive.headlineLineHeight }]}>
        What would you like to build?
      </Text>
      <ModeToggle selectedMode={selectedMode} onModeChange={onModeChange} />
      <PromptBar breakpoint={breakpoint} />
    </View>
  );
};

interface ActionCardProps {
  id: string;
  title: string;
  description: string;
  image: any;
  breakpoint: Breakpoint;
}

const ActionCard: React.FC<ActionCardProps> = ({ id, title, description, image, breakpoint }) => {
  const responsive = getResponsiveStyles(breakpoint);
  const isMobile = breakpoint === 'mobile';

  return (
    <TouchableOpacity style={[styles.actionCard, { width: responsive.cardWidth }]}>
      <Image
        source={image}
        style={[styles.cardImage, { height: responsive.cardImageHeight }]}
        resizeMode="cover"
      />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={[styles.cardDescription, isMobile && { fontSize: 13 }]}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

interface ActionCardsSectionProps {
  breakpoint: Breakpoint;
}

const ActionCardsSection: React.FC<ActionCardsSectionProps> = ({ breakpoint }) => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Start building from scratch</Text>
      <View style={styles.cardsGrid}>
        {ACTION_CARDS.map((card) => (
          <ActionCard
            key={card.id}
            id={card.id}
            title={card.title}
            description={card.description}
            image={card.image}
            breakpoint={breakpoint}
          />
        ))}
      </View>
    </View>
  );
};

interface LearningCardProps {
  text: string;
  breakpoint: Breakpoint;
}

const LearningCard: React.FC<LearningCardProps> = ({ text, breakpoint }) => {
  const responsive = getResponsiveStyles(breakpoint);

  return (
    <TouchableOpacity style={[styles.learningCard, { width: responsive.learningCardWidth }]}>
      <View style={styles.learningIcon} />
      <Text style={styles.learningText}>{text}</Text>
    </TouchableOpacity>
  );
};

interface LearningResourcesSectionProps {
  breakpoint: Breakpoint;
}

const LearningResourcesSection: React.FC<LearningResourcesSectionProps> = ({ breakpoint }) => {
  return (
    <View style={styles.section}>
      <View style={styles.sectionHeaderRow}>
        <Text style={styles.sectionTitle}>Learning Resources</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>See all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.learningGrid}>
        {LEARNING_RESOURCES.map((resource) => (
          <LearningCard key={resource.id} text={resource.text} breakpoint={breakpoint} />
        ))}
      </View>
    </View>
  );
};

interface BottomNavigationProps {
  breakpoint: Breakpoint;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({ breakpoint }) => {
  if (breakpoint !== 'mobile') return null;

  return (
    <View style={styles.bottomNav}>
      {NAV_ITEMS.map((item) => {
        const IconComponent = item.icon;
        return (
          <TouchableOpacity
            key={item.id}
            style={[styles.bottomNavItem, item.active && styles.bottomNavItemActive]}
          >
            <IconComponent size={22} color={item.active ? '#fff' : '#333'} />
            <Text style={[styles.bottomNavText, item.active && styles.bottomNavTextActive]}>
              {item.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

// ============================================
// MAIN SCREEN
// ============================================

const EmaHomeScreen: React.FC = () => {
  const { breakpoint } = useBreakpoint();
  const [selectedMode, setSelectedMode] = useState<'agent' | 'workflow'>('agent');
  const responsive = getResponsiveStyles(breakpoint);

  return (
    <SafeAreaView style={styles.container}>
      <Header breakpoint={breakpoint} />
      
      <View style={styles.mainLayout}>
        <Sidebar breakpoint={breakpoint} />
        
        <ScrollView
          style={[styles.scrollView, responsive.showSidebar && { marginLeft: responsive.sidebarWidth }]}
          contentContainerStyle={[styles.scrollContent, { 
            paddingHorizontal: responsive.containerPadding,
            gap: responsive.contentGap,
          }]}
          showsVerticalScrollIndicator={false}
        >
          <View style={[styles.contentWrapper, { maxWidth: responsive.contentMaxWidth }]}>
            <HeroSection
              breakpoint={breakpoint}
              selectedMode={selectedMode}
              onModeChange={setSelectedMode}
            />
            <ActionCardsSection breakpoint={breakpoint} />
            <LearningResourcesSection breakpoint={breakpoint} />
          </View>
        </ScrollView>
      </View>

      <BottomNavigation breakpoint={breakpoint} />
    </SafeAreaView>
  );
};

// ============================================
// STYLES
// ============================================

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  mainLayout: {
    flex: 1,
    flexDirection: 'row',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: 40,
    paddingBottom: 60,
    alignItems: 'center',
  },
  contentWrapper: {
    width: '100%',
    alignSelf: 'center',
    gap: 32,
  },

  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
    paddingHorizontal: 20,
    backgroundColor: '#fafafa',
    borderBottomWidth: 0,
  },
  headerLogo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoDot: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: '#355493',
    marginHorizontal: 6,
  },
  logoText: {
    fontSize: 17,
    fontWeight: '600',
    color: '#000',
    fontFamily: Platform.OS === 'web' ? '"Proxima Nova", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' : undefined,
  },
  headerNav: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 28,
  },
  headerNavText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    fontFamily: Platform.OS === 'web' ? '"Proxima Nova", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' : undefined,
  },
  headerMenuButton: {
    padding: 8,
  },
  headerMenuIcon: {
    fontSize: 24,
    color: '#333',
  },

  // Sidebar - grey extended to bottom per defect annotation
  sidebar: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    backgroundColor: '#f5f5f5',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 0,
    paddingVertical: 16,
    paddingHorizontal: 8,
    gap: 8,
    zIndex: 10,
    width: 70,
  },
  sidebarItem: {
    width: 54,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  sidebarItemActive: {
    backgroundColor: '#355493',
  },
  sidebarText: {
    fontSize: 10,
    fontWeight: '500',
    color: '#333',
    fontFamily: Platform.OS === 'web' ? '"Proxima Nova", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' : undefined,
  },
  sidebarTextActive: {
    color: '#fff',
  },

  // Hero
  heroSection: {
    alignItems: 'center',
    gap: 20,
    width: '100%',
  },
  headline: {
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
    fontFamily: Platform.OS === 'web' ? '"Proxima Nova", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' : undefined,
  },

  // Mode toggle
  modeToggle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  modeTogglePill: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 30,
    gap: 8,
  },
  modeTogglePillSelected: {
    backgroundColor: '#355493',
  },
  modeToggleText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#555',
    fontFamily: Platform.OS === 'web' ? '"Proxima Nova", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' : undefined,
  },
  modeToggleTextSelected: {
    color: '#fff',
  },

  // Prompt bar
  promptBar: {
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingHorizontal: 18,
    paddingVertical: 14,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
    justifyContent: 'space-between',
  },
  promptInput: {
    fontSize: 15,
    color: '#333',
    flex: 1,
    minHeight: 40,
    fontFamily: Platform.OS === 'web' ? '"Proxima Nova", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' : undefined,
  },
  promptActions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  promptIconButton: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  promptSendButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  promptRightActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  // Sections
  section: {
    width: '100%',
    gap: 14,
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    fontFamily: Platform.OS === 'web' ? '"Proxima Nova", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' : undefined,
  },
  seeAllText: {
    fontSize: 14,
    color: '#333',
    fontFamily: Platform.OS === 'web' ? '"Proxima Nova", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' : undefined,
  },

  // Cards grid
  cardsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 14,
    width: '100%',
  },
  actionCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
    flexGrow: 1,
    flexBasis: '30%',
    minWidth: 200,
  },
  cardImage: {
    width: '100%',
    overflow: 'hidden',
  },
  cardContent: {
    padding: 12,
    gap: 6,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    fontFamily: Platform.OS === 'web' ? '"Proxima Nova", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' : undefined,
  },
  cardDescription: {
    fontSize: 12,
    lineHeight: 16,
    color: '#888',
    fontFamily: Platform.OS === 'web' ? '"Proxima Nova", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' : undefined,
  },

  // Learning resources
  learningGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    width: '100%',
  },
  learningCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 1,
    flexGrow: 1,
    flexBasis: '45%',
    minWidth: 280,
  },
  learningIcon: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
  },
  learningText: {
    flex: 1,
    fontSize: 13,
    lineHeight: 18,
    color: '#333',
    fontFamily: Platform.OS === 'web' ? '"Proxima Nova", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' : undefined,
  },

  // Bottom navigation
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e8e8e8',
    paddingVertical: 8,
    paddingHorizontal: 12,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  bottomNavItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 10,
    gap: 3,
  },
  bottomNavItemActive: {
    backgroundColor: '#355493',
  },
  bottomNavText: {
    fontSize: 10,
    fontWeight: '500',
    color: '#333',
    fontFamily: Platform.OS === 'web' ? '"Proxima Nova", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' : undefined,
  },
  bottomNavTextActive: {
    color: '#fff',
  },
});

export default EmaHomeScreen;
