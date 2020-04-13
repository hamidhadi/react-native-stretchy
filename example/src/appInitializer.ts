import { Navigation } from 'react-native-navigation';
import { ScreenNames, registerScreens } from './screens';

const appInitializer = () => {
  registerScreens();

  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: {
        stack: {
          children: [
            {
              component: {
                name: ScreenNames.HomeScreen,
                options: {
                  topBar: {
                    visible: false,
                  },
                },
              },
            },
          ],
        },
      },
    });
  });
};

export default appInitializer;
