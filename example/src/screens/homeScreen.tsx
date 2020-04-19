import React, { useCallback } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { ScreenNames, ScreenProps } from './types';
import { Button } from './components';

export const HomeScreen: React.FC<ScreenProps> = ({ componentId }) => {
  const pushToScreen = useCallback((screenName: ScreenNames, title: string) => {
    Navigation.push(componentId, {
      component: {
        name: screenName,
        options: {
          topBar: {
            title: {
              text: title,
            },
          },
        },
      },
    });
  }, []);

  return (
    <View style={styles.wrapper}>
      <View
        style={{
          flex: 1,
          padding: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>
          React-Native-Stretchy
        </Text>
        <Text style={{ fontSize: 15, textAlign: 'center' }}>
          A ReactNative scrollable stretchy header component
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <Button
          title={'StretchyScrollView'}
          onPress={() =>
            pushToScreen(
              ScreenNames.StretchyScrollViewScreen,
              'StretchyScrollView',
            )
          }
        />
        <Button
          title={'StretchyFlatList'}
          onPress={() =>
            pushToScreen(ScreenNames.StretchyFlatListScreen, 'StretchyFlatList')
          }
        />
        <Button
          title={'StretchySectionList'}
          onPress={() =>
            pushToScreen(
              ScreenNames.StretchySectionListScreen,
              'StretchySectionList',
            )
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '80%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
