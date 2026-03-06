import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface IconProps {
  size?: number;
  color?: string;
}

// Home icon - house shape with improved rendering
export const HomeIcon: React.FC<IconProps> = ({ size = 24, color = '#000' }) => (
  <View style={[iconStyles.container, { width: size, height: size }]}>
    {/* Roof */}
    <View style={{
      width: 0,
      height: 0,
      borderLeftWidth: size * 0.45,
      borderRightWidth: size * 0.45,
      borderBottomWidth: size * 0.35,
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      borderBottomColor: color,
      marginBottom: -2,
    }} />
    {/* House body */}
    <View style={{
      width: size * 0.65,
      height: size * 0.4,
      backgroundColor: color,
      borderBottomLeftRadius: 2,
      borderBottomRightRadius: 2,
    }}>
      {/* Door */}
      <View style={{
        position: 'absolute',
        bottom: 0,
        left: '50%',
        marginLeft: -size * 0.12,
        width: size * 0.24,
        height: size * 0.22,
        backgroundColor: '#fafafa',
        borderTopLeftRadius: size * 0.12,
        borderTopRightRadius: size * 0.12,
      }} />
    </View>
  </View>
);

// Agent icon - person/user shape
export const AgentIcon: React.FC<IconProps> = ({ size = 24, color = '#000' }) => (
  <View style={[iconStyles.container, { width: size, height: size }]}>
    {/* Head */}
    <View style={{
      width: size * 0.35,
      height: size * 0.35,
      borderRadius: size * 0.175,
      backgroundColor: color,
      marginBottom: size * 0.05,
    }} />
    {/* Body */}
    <View style={{
      width: size * 0.55,
      height: size * 0.35,
      backgroundColor: color,
      borderTopLeftRadius: size * 0.275,
      borderTopRightRadius: size * 0.275,
      borderBottomLeftRadius: size * 0.05,
      borderBottomRightRadius: size * 0.05,
    }} />
  </View>
);

// Flow icon - workflow/branch nodes
export const FlowIcon: React.FC<IconProps> = ({ size = 24, color = '#000' }) => (
  <View style={[iconStyles.container, { width: size, height: size }]}>
    {/* Top row - two boxes */}
    <View style={{ flexDirection: 'row', gap: size * 0.15, marginBottom: size * 0.08 }}>
      <View style={{
        width: size * 0.28,
        height: size * 0.28,
        backgroundColor: color,
        borderRadius: 3,
      }} />
      <View style={{
        width: size * 0.28,
        height: size * 0.28,
        backgroundColor: color,
        borderRadius: 3,
      }} />
    </View>
    {/* Connecting lines */}
    <View style={{
      width: 2,
      height: size * 0.15,
      backgroundColor: color,
    }} />
    {/* Bottom box */}
    <View style={{
      width: size * 0.28,
      height: size * 0.28,
      backgroundColor: color,
      borderRadius: 3,
      marginTop: size * 0.05,
    }} />
  </View>
);

// Tools icon - clipboard/checklist shape
export const ToolsIcon: React.FC<IconProps> = ({ size = 24, color = '#000' }) => (
  <View style={[iconStyles.container, { width: size, height: size }]}>
    {/* Clipboard top */}
    <View style={{
      width: size * 0.3,
      height: size * 0.12,
      backgroundColor: color,
      borderRadius: 2,
      marginBottom: -size * 0.03,
      zIndex: 1,
    }} />
    {/* Clipboard body */}
    <View style={{
      width: size * 0.55,
      height: size * 0.65,
      borderWidth: 2,
      borderColor: color,
      borderRadius: 4,
      backgroundColor: 'transparent',
      paddingTop: size * 0.12,
      paddingHorizontal: size * 0.08,
      gap: size * 0.08,
    }}>
      {/* Lines */}
      <View style={{ width: '100%', height: 2, backgroundColor: color, borderRadius: 1 }} />
      <View style={{ width: '70%', height: 2, backgroundColor: color, borderRadius: 1 }} />
      <View style={{ width: '85%', height: 2, backgroundColor: color, borderRadius: 1 }} />
    </View>
  </View>
);

// More icon - 4 squares grid
export const MoreIcon: React.FC<IconProps> = ({ size = 24, color = '#000' }) => (
  <View style={[iconStyles.container, { width: size, height: size, flexDirection: 'row', flexWrap: 'wrap', gap: size * 0.12 }]}>
    <View style={{ width: size * 0.35, height: size * 0.35, backgroundColor: color, borderRadius: 3 }} />
    <View style={{ width: size * 0.35, height: size * 0.35, backgroundColor: color, borderRadius: 3 }} />
    <View style={{ width: size * 0.35, height: size * 0.35, backgroundColor: color, borderRadius: 3 }} />
    <View style={{ width: size * 0.35, height: size * 0.35, backgroundColor: color, borderRadius: 3 }} />
  </View>
);

// Settings/Gear icon - cog wheel
export const SettingsIcon: React.FC<IconProps> = ({ size = 24, color = '#727272' }) => (
  <View style={[iconStyles.container, { width: size, height: size }]}>
    {/* Outer ring */}
    <View style={{
      width: size * 0.75,
      height: size * 0.75,
      borderRadius: size * 0.375,
      borderWidth: size * 0.08,
      borderColor: color,
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      {/* Center dot */}
      <View style={{
        width: size * 0.25,
        height: size * 0.25,
        borderRadius: size * 0.125,
        backgroundColor: color,
      }} />
    </View>
    {/* Gear teeth (top, bottom, left, right) */}
    <View style={{ position: 'absolute', top: 0, width: size * 0.15, height: size * 0.2, backgroundColor: color, borderRadius: 2 }} />
    <View style={{ position: 'absolute', bottom: 0, width: size * 0.15, height: size * 0.2, backgroundColor: color, borderRadius: 2 }} />
    <View style={{ position: 'absolute', left: 0, width: size * 0.2, height: size * 0.15, backgroundColor: color, borderRadius: 2 }} />
    <View style={{ position: 'absolute', right: 0, width: size * 0.2, height: size * 0.15, backgroundColor: color, borderRadius: 2 }} />
  </View>
);

// Microphone icon
export const MicIcon: React.FC<IconProps> = ({ size = 24, color = '#727272' }) => (
  <View style={[iconStyles.container, { width: size, height: size }]}>
    {/* Mic body */}
    <View style={{
      width: size * 0.35,
      height: size * 0.5,
      backgroundColor: color,
      borderRadius: size * 0.175,
      marginBottom: size * 0.02,
    }} />
    {/* Stand arc */}
    <View style={{
      width: size * 0.5,
      height: size * 0.2,
      borderBottomLeftRadius: size * 0.25,
      borderBottomRightRadius: size * 0.25,
      borderWidth: 2,
      borderTopWidth: 0,
      borderColor: color,
      marginBottom: size * 0.02,
    }} />
    {/* Stand base */}
    <View style={{
      width: 2,
      height: size * 0.1,
      backgroundColor: color,
    }} />
  </View>
);

// Send/Arrow icon - paper plane style
export const SendIcon: React.FC<IconProps> = ({ size = 24, color = '#fff' }) => (
  <View style={[iconStyles.container, { width: size, height: size }]}>
    <View style={{
      width: 0,
      height: 0,
      borderTopWidth: size * 0.35,
      borderBottomWidth: size * 0.35,
      borderLeftWidth: size * 0.5,
      borderTopColor: 'transparent',
      borderBottomColor: 'transparent',
      borderLeftColor: color,
      transform: [{ rotate: '0deg' }],
    }} />
  </View>
);

// Agent toggle icon - robot/AI face
export const AgentToggleIcon: React.FC<IconProps> = ({ size = 16, color = '#fff' }) => (
  <View style={[iconStyles.container, { width: size, height: size }]}>
    {/* Face circle */}
    <View style={{
      width: size * 0.85,
      height: size * 0.85,
      borderRadius: size * 0.425,
      borderWidth: 1.5,
      borderColor: color,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: size * 0.05,
    }}>
      {/* Eyes */}
      <View style={{ flexDirection: 'row', gap: size * 0.2, marginBottom: size * 0.08 }}>
        <View style={{ width: size * 0.12, height: size * 0.12, borderRadius: size * 0.06, backgroundColor: color }} />
        <View style={{ width: size * 0.12, height: size * 0.12, borderRadius: size * 0.06, backgroundColor: color }} />
      </View>
      {/* Mouth */}
      <View style={{ width: size * 0.3, height: 1.5, backgroundColor: color, borderRadius: 1 }} />
    </View>
    {/* Antenna */}
    <View style={{ position: 'absolute', top: -size * 0.1, width: 1.5, height: size * 0.15, backgroundColor: color }} />
  </View>
);

// Workflow toggle icon - flow lines
export const WorkflowIcon: React.FC<IconProps> = ({ size = 16, color = '#3d3d3d' }) => (
  <View style={[iconStyles.container, { width: size, height: size, gap: size * 0.12 }]}>
    {/* Top line with dot */}
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <View style={{ width: size * 0.25, height: 1.5, backgroundColor: color }} />
      <View style={{ width: size * 0.15, height: size * 0.15, borderRadius: size * 0.075, backgroundColor: color }} />
      <View style={{ width: size * 0.25, height: 1.5, backgroundColor: color }} />
    </View>
    {/* Middle line */}
    <View style={{ width: size * 0.65, height: 1.5, backgroundColor: color }} />
    {/* Bottom line with dot */}
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <View style={{ width: size * 0.25, height: 1.5, backgroundColor: color }} />
      <View style={{ width: size * 0.15, height: size * 0.15, borderRadius: size * 0.075, backgroundColor: color }} />
      <View style={{ width: size * 0.25, height: 1.5, backgroundColor: color }} />
    </View>
  </View>
);

// Wipro Logo text
export const WiproLogo: React.FC<{ width?: number; height?: number }> = ({ width = 60, height = 24 }) => (
  <Text style={{ fontSize: 16, fontWeight: '700', color: '#000' }}>wipro</Text>
);

const iconStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const styles = iconStyles;
