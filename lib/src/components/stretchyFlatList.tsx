import React from 'react';
import { View, Animated, FlatListProps } from 'react-native';
import { commonStyles as styles } from './styles';
import { StretchyProps } from '../types';
import { useStretchy } from '../hooks/useStretchy';
import { StretchyImage } from './stretchyImage';

export type StretchyFlatListProps<ItemT> = React.PropsWithChildren<
  StretchyProps & Omit<Animated.AnimatedProps<FlatListProps<ItemT>>, 'onScroll'>
>;

export type StretchyFlatListComponent = <ItemT>(
  props: StretchyFlatListProps<ItemT>,
) => JSX.Element;

export const StretchyFlatList: StretchyFlatListComponent = ({
  backgroundColor,
  foreground,
  gradient,
  image,
  imageHeight,
  imageResizeMode,
  imageWrapperStyle,
  onScroll,
  style,
  ...otherProps
}) => {
  const stretchy = useStretchy({
    image,
    scrollListener: onScroll,
  });

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <StretchyImage
        image={image}
        imageResizeMode={imageResizeMode}
        imageWrapperStyle={imageWrapperStyle}
        gradient={gradient}
        animation={stretchy.animation}
        imageHeight={imageHeight || stretchy.heightBasedOnRatio}
        onLayout={stretchy.onImageWrapperLayout}
      />
      <Animated.FlatList
        {...otherProps}
        style={[style, styles.contentContainer]}
        scrollEventThrottle={1}
        onScroll={stretchy.onScroll}
        ListHeaderComponent={
          <View
            style={[
              styles.foregroundContainer,
              { height: imageHeight || stretchy.heightBasedOnRatio },
            ]}>
            {foreground}
          </View>
        }
      />
    </View>
  );
};
