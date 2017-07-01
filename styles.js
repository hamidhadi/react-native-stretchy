import { StyleSheet, Dimensions } from 'react-native';

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
    resizeMode: 'cover',
    flex: 1
  },
  contentContainer: {
    backgroundColor: 'transparent'
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
    padding: 10
  },
  title: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 20
  },
  subtitle: {
    color: '#FFF',
    fontSize: 12
  }
});
