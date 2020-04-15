import {
  Animated,
  NativeSyntheticEvent,
  NativeScrollEvent,
  LayoutChangeEvent,
} from 'react-native';
import { StretchyImage, StretchyOnScroll } from '../types';
import { useImageHeightBasedOnRatio } from './useImageHeightBasedOnRatio';
import { useOnScrollHandle } from './useOnScrollHandle';

export type UseStretchy = (config: {
  image?: StretchyImage;
  preferredImageHeight?: number;
  scrollListener?: StretchyOnScroll;
}) => {
  animation: Animated.Value;
  heightBasedOnRatio: number;
  onImageLoad: () => void;
  onScroll(event: NativeSyntheticEvent<NativeScrollEvent>): void;
  onImageWrapperLayout(event: LayoutChangeEvent): void;
};

export const useStretchy: UseStretchy = ({
  image,
  preferredImageHeight,
  scrollListener,
}) => {
  const { animation, onScroll, onImageWrapperLayout } = useOnScrollHandle(
    scrollListener,
  );

  const { imageHeight, onImageLoad } = useImageHeightBasedOnRatio(
    image,
    preferredImageHeight,
  );

  return {
    animation,
    onImageLoad,
    onScroll,
    onImageWrapperLayout,
    heightBasedOnRatio: imageHeight,
  };
};
