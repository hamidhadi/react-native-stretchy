import React from 'react';
import { StyleSheet, Text, View, Image, ListRenderItem } from 'react-native';
import { StretchyFlatList } from '../../..';
import { photos, Photo } from '../stub';
import { ScreenProps } from './types';
import { Foreground } from './components';

const renderItem: ListRenderItem<Photo> = ({ item }) => (
  <View style={styles.itemWrapper}>
    <Image source={{ uri: item.thumbnailUrl, width: 70, height: 70 }} />
    <Text style={styles.itemTitle}>{item.title}</Text>
  </View>
);

const keyExtractor = (item: Photo) => `${item.id}`;

export const StretchyFlatListScreen: React.FC<ScreenProps> = () => {
  return (
    <StretchyFlatList
      image={require('../../asset/batman.jpg')}
      foreground={<Foreground />}
      backgroundColor="#EFEFF4"
      data={photos}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  );
};

const styles = StyleSheet.create({
  itemWrapper: {
    flex: 1,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
  },
  itemTitle: {
    flex: 1,
    color: '#000',
    marginLeft: 5,
  },
});
