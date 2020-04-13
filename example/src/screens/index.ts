import { Navigation } from 'react-native-navigation';
import { ScreenNames } from './types';
import { HomeScreen } from './homeScreen';
import { StretchyHeaderScreen } from './stretchyHeaderScreen';
import { StretchyFlatListScreen } from './stretchyFlatListScreen';
import { StretchySectionListScreen } from './stretchySectionListScreen';

export * from './types';

export function registerScreens() {
  Navigation.registerComponent(ScreenNames.HomeScreen, () => HomeScreen);
  Navigation.registerComponent(
    ScreenNames.StretchyHeaderScreen,
    () => StretchyHeaderScreen,
  );
  Navigation.registerComponent(
    ScreenNames.StretchyFlatListScreen,
    () => StretchyFlatListScreen,
  );
  Navigation.registerComponent(
    ScreenNames.StretchySectionListScreen,
    () => StretchySectionListScreen,
  );
}
