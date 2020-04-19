import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Foreground: React.FC<{}> = () => (
  <View style={styles.foregroundContainer}>
    <Text style={styles.title}>My Stretchy Header Title</Text>
    <Text style={styles.subtitle}>Awesome Subtitle</Text>
  </View>
);

const styles = StyleSheet.create({
  foregroundContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 20,
  },
  subtitle: {
    color: '#FFF',
    fontSize: 12,
  },
});
