import { useEffect, useState, useMemo, useCallback } from 'react';
import { Image, Dimensions, ImageURISource } from 'react-native';
// @ts-ignore
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';
import { StretchyImage } from '../types';

const WINDOW_WIDTH = Dimensions.get('window').width;

export type UseImageHeightBasedOnRatio = (
  image?: StretchyImage,
  preferredImageHeight?: number,
) => { imageHeight: number; onImageLoad: () => void };

export const useImageHeightBasedOnRatio: UseImageHeightBasedOnRatio = (
  image,
  preferredImageHeight,
) => {
  const [imageIsLoaded, setImageIsLoaded] = useState(false);
  const [ratio, setRatio] = useState(0);
  const onImageLoad = useCallback(() => setImageIsLoaded(true), []);

  const imageHeight = useMemo(() => {
    if (!imageIsLoaded) return preferredImageHeight || 100;

    return (
      preferredImageHeight ||
      (ratio > 1 ? WINDOW_WIDTH / ratio : WINDOW_WIDTH * ratio)
    );
  }, [imageIsLoaded, preferredImageHeight, ratio]);

  useEffect(() => {
    const imageUri = (image as ImageURISource).uri;

    if (imageUri) {
      Image.getSize(
        imageUri,
        (width, height) => {
          setRatio(width / height);
        },
        () => null,
      );
    } else {
      const { width, height } = resolveAssetSource(image);
      setRatio(width / height);
    }
  }, [image]);

  return { imageHeight, onImageLoad };
};
