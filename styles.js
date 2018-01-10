import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  photoContainer: {
    flex: 1,
    position: 'absolute'
  },
  photo: {
    width: Dimensions.get('window').width,
    flex: 1
  },
  contentContainer: {
    backgroundColor: 'transparent'
  },
  foregroundContainer: {
    flex: 1,
    backgroundColor: 'transparent'
  }
})
