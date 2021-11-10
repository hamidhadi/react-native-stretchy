import * as ReactNative from 'react-native';
import { FastImageProps } from 'react-native-fast-image2';

export type StretchyImage = FastImageProps['source'];

export type StretchyOnScroll = (
  position: number,
  reachedToBottomOfHeader: boolean,
) => void;

export interface StretchyProps {
  backgroundColor?: string;
  image?: StretchyImage;
  imageHeight?: number;
  imageResizeMode?: FastImageProps['resizeMode'];
  imageWrapperStyle?: ReactNative.ViewStyle;
  imageOverlay?: React.ReactElement;
  foreground?: React.ReactElement;
  onScroll?: StretchyOnScroll;
}
