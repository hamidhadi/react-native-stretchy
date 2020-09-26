import React from 'react';
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const GRADIENT_COLORS = [	
  'rgba(0, 0, 0, 0.9)',	
  'rgba(0, 0, 0, 0.5)',	
  'rgba(0, 0, 0, 0.9)',	
];

export const Gradient: React.FC<{}> = () => (
  <LinearGradient	
    style={styles.container}	
    colors={GRADIENT_COLORS}
  />
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
