import React from 'react';
import { View, Animated } from 'react-native';
import { commonStyles as styles } from './styles';
import { StretchySectionListComponent } from '../types';
import { useStretchy } from '../hooks/useStretchy';
import { StretchyImage } from './stretchyImage';

export const StretchySectionList: StretchySectionListComponent = ({
  backgroundColor,
  children,
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
  const stretchy = useStretchy(image, imageHeight, onScroll);

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
        ListHeaderComponent={
          <View
            style={[
              styles.foregroundContainer,
              { height: stretchy.heightBasedOnRatio },
            ]}>
            {foreground}
          </View>
        }
        onScroll={stretchy.onScroll}
      />
    </View>
  );
};
