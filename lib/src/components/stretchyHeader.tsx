import React, { useMemo } from 'react';
import { Animated, View, Dimensions } from 'react-native';
import { commonStyles as styles } from './styles';
import { StretchyImage } from './stretchyImage';
import { StretchyHeaderProps } from '../types';
import { useStretchy } from '../hooks/useStretchy';

const wHeight = Dimensions.get('window').height;

export const StretchyHeader: React.FC<StretchyHeaderProps> = ({
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
  ...props
}) => {
  const stretchy = useStretchy(image, imageHeight, onScroll);
  const contentMinHeight = useMemo(
    () =>
      stretchy.heightBasedOnRatio ? wHeight - stretchy.heightBasedOnRatio : 0,
    [stretchy.heightBasedOnRatio],
  );

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
      <Animated.ScrollView
        {...props}
        style={[style, styles.contentContainer]}
        scrollEventThrottle={1}
        onScroll={stretchy.onScroll}>
        <View
          style={[
            styles.foregroundContainer,
            { height: stretchy.heightBasedOnRatio },
          ]}>
          {foreground}
        </View>
        <View
          style={{
            backgroundColor,
            minHeight: contentMinHeight,
          }}>
          {children}
        </View>
      </Animated.ScrollView>
    </View>
  );
};
