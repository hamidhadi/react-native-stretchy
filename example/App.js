/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import StretchyHeader from 'react-native-stretchy'

const ForegroundComponent = () => {
  return (
    <View style={styles.foregroundContainer}>
      <Text style={styles.title}>My Stretchy Header Title</Text>
      <Text style={styles.subtitle}>Awesome Subtitle</Text>
    </View>
  )
}

export default class App extends Component<{}> {

  render() {
    return (
      <StretchyHeader
        image={require('./asset/batman.jpg')}
        gradientColors={['rgba(0, 0, 0, 0.9)', 'rgba(0, 0, 0, 0.5)', 'rgba(0, 0, 0, 0.9)']}
        foreground={ForegroundComponent()}
        backgroundColor='#EFEFF4'
        onScroll={position => console.log(position)}
      >
        <StatusBar barStyle={'light-content'} />
        <Text style={{padding: 10}}>
          Batman is a fictional superhero appearing in American comic books published by DC Comics. The character was created by artist Bob Kane and writer Bill Finger,[4][5] and first appeared in Detective Comics #27 (1939). Originally named the "Bat-Man", the character is also referred to by such epithets as the Caped Crusader, the Dark Knight, and the World's Greatest Detective.

          Batman's secret identity is Bruce Wayne, a wealthy American playboy, philanthropist, and owner of Wayne Enterprises. After witnessing the murder of his parents Thomas Wayne and Martha Wayne as a child, he swore vengeance against criminals, an oath tempered by a sense of justice. Wayne trains himself physically and intellectually and crafts a bat-inspired persona to fight crime.[7] Batman operates in the fictional Gotham City, with assistance from various supporting characters, including his butler Alfred, police commissioner Gordon, and vigilante allies such as Robin. Unlike most superheroes, Batman does not possess any superpowers; rather, he relies on his genius intellect, physical prowess, martial arts abilities, detective skills, science and technology, vast wealth, intimidation, and indomitable will. A large assortment of villains make up Batman's rogues gallery, including his archenemy, the Joker.
        </Text>
        <Text style={{padding: 10}}>
          Batman is a fictional superhero appearing in American comic books published by DC Comics. The character was created by artist Bob Kane and writer Bill Finger,[4][5] and first appeared in Detective Comics #27 (1939). Originally named the "Bat-Man", the character is also referred to by such epithets as the Caped Crusader, the Dark Knight, and the World's Greatest Detective.

          Batman's secret identity is Bruce Wayne, a wealthy American playboy, philanthropist, and owner of Wayne Enterprises. After witnessing the murder of his parents Thomas Wayne and Martha Wayne as a child, he swore vengeance against criminals, an oath tempered by a sense of justice. Wayne trains himself physically and intellectually and crafts a bat-inspired persona to fight crime.[7] Batman operates in the fictional Gotham City, with assistance from various supporting characters, including his butler Alfred, police commissioner Gordon, and vigilante allies such as Robin. Unlike most superheroes, Batman does not possess any superpowers; rather, he relies on his genius intellect, physical prowess, martial arts abilities, detective skills, science and technology, vast wealth, intimidation, and indomitable will. A large assortment of villains make up Batman's rogues gallery, including his archenemy, the Joker.
        </Text>
      </StretchyHeader>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
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
});
