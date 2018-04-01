import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

export default class HomeScreen extends Component {
  showStretchyHeader () {
    this.props.navigator.push({
      screen: 'example.stretchyHeaderScreen',
      title: 'StretchyHeader',
      backButtonTitle: ''
    });
  }

  showStretchyFlatList () {
    this.props.navigator.push({
      screen: 'example.stretchyFlatListScreen',
      title: 'StretchyFlatList',
      backButtonTitle: ''
    });
  }

  showStretchySectionList () {
    this.props.navigator.push({
      screen: 'example.stretchySectionListScreen',
      title: 'StretchySectionList',
      backButtonTitle: ''
    });
  }

  render () {
    return (
      <View style={styles.wrapper}>
        <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={() => this.showStretchyHeader()}>
          <Text style={styles.textButton}>StretchyHeader</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={() => this.showStretchyFlatList()}>
          <Text style={styles.textButton}>StretchyFlatList</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={() => this.showStretchySectionList()}>
          <Text style={styles.textButton}>StretchySectionList</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: '#4A4A4A',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10
  },
  textButton: {
    color: '#FFF'
  }
})