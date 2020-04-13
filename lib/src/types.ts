import * as ReactNative from 'react-native';
import { LinearGradientProps } from 'react-native-linear-gradient';

/**
 * =====================
 * Main
 * =====================
 */

export type StretchyImage =
  | ReactNative.ImageURISource
  | ReactNative.ImageRequireSource;

export type StretchyOnScroll = (
  position: number,
  reachedToBottomOfHeader: boolean,
) => void;

export interface StretchyProps {
  backgroundColor?: string;
  image?: StretchyImage;
  imageHeight?: number;
  imageResizeMode?: ReactNative.ImageResizeMode;
  imageWrapperStyle?: ReactNative.ViewStyle;
  foreground?: React.ReactElement;
  onScroll?: StretchyOnScroll;
  gradient?: Pick<
    LinearGradientProps,
    | 'colors'
    | 'start'
    | 'end'
    | 'locations'
    | 'useAngle'
    | 'angleCenter'
    | 'angle'
  >;
}

/**
 * =====================
 * Components
 * =====================
 */

export interface StretchyImageProps
  extends Omit<StretchyProps, 'backgroundColor' | 'foreground' | 'onScroll'> {
  animation: ReactNative.Animated.Value;
  imageHeight: number;
  onImageLoad(): void;
  onLayout(event: ReactNative.LayoutChangeEvent): void;
}

export type StretchyHeaderProps = StretchyProps &
  Omit<
    ReactNative.Animated.AnimatedProps<ReactNative.ScrollViewProps>,
    'onScroll'
  >;

export type StretchyFlatListProps<ItemT> = React.PropsWithChildren<
  StretchyProps &
    Omit<
      ReactNative.Animated.AnimatedProps<ReactNative.FlatListProps<ItemT>>,
      'onScroll'
    >
>;

export type StretchyFlatListComponent = <ItemT>(
  props: StretchyFlatListProps<ItemT>,
) => JSX.Element;

export type StretchySectionListProps<ItemT> = React.PropsWithChildren<
  StretchyProps &
    Omit<
      ReactNative.Animated.AnimatedProps<ReactNative.SectionListProps<ItemT>>,
      'onScroll'
    >
>;

export type StretchySectionListComponent = <ItemT>(
  props: StretchySectionListProps<ItemT>,
) => JSX.Element;

/**
 * =====================
 * Hooks
 * =====================
 */

export type UseStretchy = (
  image?: StretchyImage,
  preferredImageHeight?: number,
  scrollListener?: StretchyOnScroll,
) => {
  animation: ReactNative.Animated.Value;
  heightBasedOnRatio: number;
  onImageLoad: () => void;
  onScroll(
    event: ReactNative.NativeSyntheticEvent<ReactNative.NativeScrollEvent>,
  ): void;
  onImageWrapperLayout(event: ReactNative.LayoutChangeEvent): void;
};

export type UseOnScrollHandle = (
  listener?: StretchyOnScroll,
) => {
  animation: ReactNative.Animated.Value;
  onImageWrapperLayout(event: ReactNative.LayoutChangeEvent): void;
  onScroll(
    event: ReactNative.NativeSyntheticEvent<ReactNative.NativeScrollEvent>,
  ): void;
};

export type UseImageHeightBasedOnRatio = (
  image?: StretchyImage,
  preferredImageHeight?: number,
) => [number, () => void];

export type UseImageWrapperLayout = () => [
  ReactNative.LayoutRectangle | undefined,
  (event: ReactNative.LayoutChangeEvent) => void,
];

export type UseStretchyAnimation = (
  listener?: (offsetY: number) => void,
) => [
  ReactNative.Animated.Value,
  (
    event: ReactNative.NativeSyntheticEvent<ReactNative.NativeScrollEvent>,
  ) => void,
];
