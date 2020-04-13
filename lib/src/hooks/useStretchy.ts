import { UseStretchy } from '../types';
import { useImageHeightBasedOnRatio } from './useImageHeightBasedOnRatio';
import { useOnScrollHandle } from './useOnScrollHandle';

export const useStretchy: UseStretchy = (
  image,
  preferredImageHeight,
  scrollListener,
) => {
  const { animation, onScroll, onImageWrapperLayout } = useOnScrollHandle(
    scrollListener,
  );

  const [heightBasedOnRatio, onImageLoad] = useImageHeightBasedOnRatio(
    image,
    preferredImageHeight,
  );

  return {
    animation,
    heightBasedOnRatio,
    onImageLoad,
    onScroll,
    onImageWrapperLayout,
  };
};
