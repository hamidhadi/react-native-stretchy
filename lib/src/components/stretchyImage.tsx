import React, { useMemo } from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { StretchyImageProps } from '../types';
import { AnimatedImageBackground } from './animatedImageBackground';
import { stretchyImageStyles as styles } from './styles';

export const StretchyImage: React.FC<StretchyImageProps> = ({
  animation,
  gradient,
  image,
  imageResizeMode,
  imageWrapperStyle,
  imageHeight,
  onImageLoad,
  onLayout,
}) => {
  const transformStyles = useMemo(
    () => ({
      transform: [
        {
          translateY: animation.interpolate({
            inputRange: [-imageHeight, 0, imageHeight],
            outputRange: [imageHeight / 2, 0, -imageHeight / 2],
          }),
        },
        {
          scale: animation.interpolate({
            inputRange: [-imageHeight, 0, imageHeight],
            outputRange: [2, 1, 1],
          }),
        },
      ],
    }),
    [animation, imageHeight],
  );

  return (
    <View
      style={[imageWrapperStyle, styles.wrapper, { height: imageHeight }]}
      onLayout={onLayout}>
      <AnimatedImageBackground
        source={image || {}}
        resizeMode={imageResizeMode}
        onLoad={onImageLoad}
        style={[styles.animatedImageBackground, transformStyles]}>
        {!!gradient && (
          <LinearGradient
            style={{ flex: 1 }}
            colors={gradient.colors}
            start={gradient.start}
            end={gradient.end}
            locations={gradient.locations}
          />
        )}
      </AnimatedImageBackground>
    </View>
  );
};
