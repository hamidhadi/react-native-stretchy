import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1
  },
  photoContainer: {
    flex: 1,
    position: 'absolute'
  },
  photo: {
    flex: 1,
    resizeMode: 'cover'
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
    fontFamily: 'IRANSansWeb(NoEn)',
    fontWeight: 'bold',
    fontSize: 20
  },
  subTitle: {
    color: '#FFF',
    fontFamily: 'IRANSansWeb(NoEn)',
    fontSize: 12
  }
});