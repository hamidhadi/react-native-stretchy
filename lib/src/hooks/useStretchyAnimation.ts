import {
  Animated,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import { useState, useCallback } from 'react';

export type UseStretchyAnimation = (
  listener?: (offsetY: number) => void,
) => [Animated.Value, (event: NativeSyntheticEvent<NativeScrollEvent>) => void];

export const useStretchyAnimation: UseStretchyAnimation = (listener) => {
  const [animation] = useState(new Animated.Value(1));

  const animationEvent = useCallback(
    Animated.event<NativeScrollEvent>(
      [
        {
          nativeEvent: {
            contentOffset: { y: animation },
          },
        },
      ],
      {
        useNativeDriver: true,
        listener: ({ nativeEvent: { contentOffset } }) =>
          listener && listener(contentOffset.y),
      },
    ),
    [],
  );

  return [animation, animationEvent];
};
