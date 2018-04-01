import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image
} from 'react-native'
import { StretchySectionList } from 'react-native-stretchy'

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
      <StretchySectionList
        image={require('../asset/batman.jpg')}
        imageHeight={300}
        gradientColors={['rgba(0, 0, 0, 0.9)', 'rgba(0, 0, 0, 0.5)', 'rgba(0, 0, 0, 0.9)']}
        foreground={ForegroundComponent()}
        backgroundColor='#EFEFF4'
        onScroll={(position, scrollReachesToBottomOfHeader) => console.log(position, scrollReachesToBottomOfHeader)}
        renderItem={({item}) => (
          <View style={{backgroundColor: '#FFF', padding: 10}}>
            <Text style={{color: '#000'}}>{item.title}</Text>
          </View>
        )}
        renderSectionHeader={({section}) => (
          <View style={{backgroundColor: '#4A4A4A'}}>
            <Text style={{color: '#FFF', padding: 10}}>{section.title}</Text>
          </View>
        )}
        sections={[
          {data: data.slice(0, 10), title: 'Section 1'},
          {data: data.slice(10, 20), title: 'Section 2'},
          {data: data.slice(20, 30), title: 'Section 3'},
          {data: data.slice(30, 40), title: 'Section 4'},
        ]}
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
