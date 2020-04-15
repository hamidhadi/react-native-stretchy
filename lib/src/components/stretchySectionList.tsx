import React from 'react';
import { View, Animated, SectionListProps } from 'react-native';
import { commonStyles as styles } from './styles';
import { StretchyProps } from '../types';
import { useStretchy } from '../hooks/useStretchy';
import { StretchyImage } from './stretchyImage';

export type StretchySectionListProps<ItemT> = React.PropsWithChildren<
  StretchyProps &
    Omit<Animated.AnimatedProps<SectionListProps<ItemT>>, 'onScroll'>
>;

export type StretchySectionListComponent = <ItemT>(
  props: StretchySectionListProps<ItemT>,
) => JSX.Element;

export const StretchySectionList: StretchySectionListComponent = ({
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
    preferredImageHeight: imageHeight,
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
        imageHeight={stretchy.heightBasedOnRatio}
        onImageLoad={stretchy.onImageLoad}
        onLayout={stretchy.onImageWrapperLayout}
      />
      <Animated.SectionList
        {...otherProps}
        style={[style, styles.contentContainer]}
        scrollEventThrottle={1}
        onScroll={stretchy.onScroll}
        ListHeaderComponent={
          <View
            style={[
              styles.foregroundContainer,
              { height: stretchy.heightBasedOnRatio },
            ]}>
            {foreground}
          </View>
        }
      />
    </View>
  );
};
