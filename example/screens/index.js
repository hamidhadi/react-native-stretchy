import { Navigation } from 'react-native-navigation';

import homeScreen from './homeScreen'
import stretchyHeaderScreen from './stretchyHeaderScreen';
import stretchyFlatListScreen from './stretchyFlatListScreen';
import stretchySectionListScreen from './stretchySectionListScreen';

export function registerScreens() {
  Navigation.registerComponent('example.homeScreen', () => homeScreen);
  Navigation.registerComponent('example.stretchyHeaderScreen', () => stretchyHeaderScreen);
  Navigation.registerComponent('example.stretchyFlatListScreen', () => stretchyFlatListScreen);
  Navigation.registerComponent('example.stretchySectionListScreen', () => stretchySectionListScreen);
}