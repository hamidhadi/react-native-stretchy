import { useState, useCallback } from 'react';
import { LayoutRectangle, LayoutChangeEvent } from 'react-native';
import { UseImageWrapperLayout } from '../types';

export const useImageWrapperLayout: UseImageWrapperLayout = () => {
  const [imageWrapperLayout, setImageWrapperLayout] = useState<
    LayoutRectangle
  >();

  const onImageWrapperLayout = useCallback(
    (event: LayoutChangeEvent) =>
      setImageWrapperLayout(event.nativeEvent.layout),
    [],
  );

  return [imageWrapperLayout, onImageWrapperLayout];
};
