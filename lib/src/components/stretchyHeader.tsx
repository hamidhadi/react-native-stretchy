import React, { useMemo } from 'react';
import { Animated, View, Dimensions, ScrollViewProps } from 'react-native';
import { commonStyles as styles } from './styles';
import {
  StretchyComponentProps,
  WithStretchyProps,
  WithStretchy,
} from './withStretchy';

const wHeight = Dimensions.get('window').height;

export type StretchyHeaderProps = WithStretchyProps &
  StretchyComponentProps<ScrollViewProps>;

const StretchyHeader: React.FC<StretchyHeaderProps> = ({
  backgroundColor,
  children,
  foreground,
  imageHeight,
  onScroll,
  stretchy,
  style,
  ...props
}) => {
  const contentMinHeight = useMemo(
    () =>
      stretchy.heightBasedOnRatio ? wHeight - stretchy.heightBasedOnRatio : 0,
    [stretchy.heightBasedOnRatio],
  );

  return (
    <Animated.ScrollView
      {...props}
      style={[style, styles.contentContainer]}
      scrollEventThrottle={1}
      onScroll={stretchy.onScroll}>
      <View
        style={[
          styles.foregroundContainer,
          { height: imageHeight || stretchy.heightBasedOnRatio },
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
  );
};

export default WithStretchy<ScrollViewProps>(StretchyHeader);
