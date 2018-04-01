import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image
} from 'react-native'
import { StretchyFlatList } from 'react-native-stretchy'

import data from '../asset/photos.json'

const ForegroundComponent = () => {
  return (
    <View style={styles.foregroundContainer}>
      <Text style={styles.title}>My Stretchy Header Title</Text>
      <Text style={styles.subtitle}>Awesome Subtitle</Text>
    </View>
  )
}

export default class App extends Component {
  render () {
    return (
      <StretchyFlatList
        image={require('../asset/batman.jpg')}
        imageHeight={300}
        gradientColors={['rgba(0, 0, 0, 0.9)', 'rgba(0, 0, 0, 0.5)', 'rgba(0, 0, 0, 0.9)']}
        foreground={ForegroundComponent()}
        backgroundColor='#EFEFF4'
        onScroll={(position, scrollReachesToBottomOfHeader) => console.log(position, scrollReachesToBottomOfHeader)}
        data={data}
        renderItem={({item}) => (
          <View style={{flex: 1, backgroundColor: '#FFF', flexDirection: 'row', padding: 5, alignItems: 'center'}}>
            <Image source={{uri: item.thumbnailUrl, width: 70, height: 70}} />
            <Text style={{flex: 1, color: '#000', marginLeft: 5}}>{item.title}</Text>
          </View>
        )}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  foregroundContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
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
})
