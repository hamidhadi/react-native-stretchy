import { useCallback } from 'react';
import { UseOnScrollHandle } from '../types';
import { useImageWrapperLayout } from './useImageWrapperLayout';
import { useStretchyAnimation } from './useStretchyAnimation';

export const useOnScrollHandle: UseOnScrollHandle = (listener) => {
  const [imageWrapperLayout, onImageWrapperLayout] = useImageWrapperLayout();

  const animationListener = useCallback(
    (offsetY) => {
      if (listener) {
        if (imageWrapperLayout && offsetY >= imageWrapperLayout?.height) {
          listener(offsetY, true);
        } else {
          listener(offsetY, false);
        }
      }
    },
    [imageWrapperLayout],
  );

  const [animation, animationEvent] = useStretchyAnimation(animationListener);

  return {
    animation,
    onImageWrapperLayout,
    onScroll: animationEvent,
  };
};
