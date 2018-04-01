import { Navigation } from 'react-native-navigation'
import { registerScreens } from './screens'

console.disableYellowBox = true
registerScreens()

Navigation.startSingleScreenApp({
  screen: {
    screen: 'example.homeScreen',
    title: 'react-native-stretchy'
  }
})
