import React, { useMemo } from 'react';
import {
  Text,
  View,
  SectionListRenderItem,
  SectionListData,
  StyleSheet,
} from 'react-native';
import { StretchySectionList } from '../../..';
import { Foreground } from './components';
import { photos, Photo } from '../stub';

const renderSectionHeader = ({
  section,
}: {
  section: SectionListData<Photo>;
}) => (
  <View style={styles.sectionHeaderWrapper}>
    <Text style={styles.sectionHeaderTitle}>{section.title}</Text>
  </View>
);

const renderItem: SectionListRenderItem<Photo> = ({ item }) => (
  <View style={styles.itemWrapper}>
    <Text style={styles.itemTitle}>{item.title}</Text>
  </View>
);

const keyExtractor = (item: Photo) => `${item.id}`;

export const StretchySectionListScreen: React.FC<{}> = () => {
  const sections = useMemo(
    () => [
      { data: photos.slice(0, 10), title: 'Section 1' },
      { data: photos.slice(10, 20), title: 'Section 2' },
      { data: photos.slice(20, 30), title: 'Section 3' },
      { data: photos.slice(30, 40), title: 'Section 4' },
    ],
    [],
  );

  return (
    <StretchySectionList
      image={require('../../asset/batman.jpg')}
      foreground={<Foreground />}
      backgroundColor="#EFEFF4"
      renderSectionHeader={renderSectionHeader}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      sections={sections}
      gradient={{
        colors: [
          'rgba(0, 0, 0, 0.9)',
          'rgba(0, 0, 0, 0.5)',
          'rgba(0, 0, 0, 0.9)',
        ],
      }}
    />
  );
};

const styles = StyleSheet.create({
  sectionHeaderWrapper: {
    backgroundColor: '#4A4A4A',
  },
  sectionHeaderTitle: {
    color: '#FFF',
    padding: 10,
  },
  itemWrapper: {
    backgroundColor: '#FFF',
    padding: 10,
  },
  itemTitle: {
    color: '#000',
  },
});
