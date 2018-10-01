import {
  Animated,
  ScrollView,
  View
} from 'react-native'
import React, {Component} from 'react'

import ImageWrapperComponent from './ImageWrapperComponent'
import PropTypes from 'prop-types'
import StretchyBase from './StretchyBase'
import Styles from './styles'

export default class StretchyHeader extends StretchyBase {
  render () {
    const {
      backgroundColor,
      image,
      imageResizeMode,
      imageHeight,
      imageWrapperStyle,
      foreground,
      gradientColors,
      gradientStart,
      gradientEnd,
      gradientLocations,
      style,
      onScroll,
      children,
      ...otherProps
    } = this.props
    const { ratio } = this.state
    const height = this.generateImageHeight(imageHeight)

    return (
      <View style={[Styles.container, {backgroundColor}]}>
        <ImageWrapperComponent
          height={height}
          image={image}
          imageResizeMode={imageResizeMode}
          imageWrapperStyle={imageWrapperStyle}
          gradientColors={gradientColors}
          gradientStart={gradientStart}
          gradientEnd={gradientEnd}
          gradientLocations={gradientLocations}
          onScroll={onScroll ? (value) => this.onScroll(value) : null}
          onImageLoad={() => this.onImageLoad()}
          ref={me => { this.imageWrapper = me }}
        />
        <ScrollView
          {...otherProps}
          style={[style, Styles.contentContainer]}
          scrollEventThrottle={16}
          onScroll={
            this.imageWrapper && Animated.event([{ nativeEvent: {contentOffset: {y: this.imageWrapper.animation}} }])
          }
        >
          <View style={[Styles.foregroundContainer, {height}]}>
            {foreground}
          </View>
          <View style={{backgroundColor, minHeight: this.wHeight - height}}>
            {children}
          </View>
        </ScrollView>
      </View>
    )
  }
}

StretchyHeader.propTypes = {
  backgroundColor: PropTypes.string,
  image: PropTypes.object,
  imageHeight: PropTypes.number,
  imageResizeMode: PropTypes.oneOf(['cover', 'contain', 'stretch', 'repeat']),
  imageWrapperStyle: PropTypes.object,
  gradientColors: PropTypes.array,
  gradientStart: PropTypes.object,
  gradientEnd: PropTypes.object,
  gradientLocations: PropTypes.arrayOf(PropTypes.number),
  foreground: PropTypes.element,
  onScroll: PropTypes.func
}

StretchyHeader.defaultProps = {
  backgroundColor: '#FFF',
  image: null,
  imageHeight: null,
  imageResizeMode: 'cover',
  imageWrapperStyle: null,
  gradientColors: [],
  gradientStart: null,
  gradientEnd: null,
  gradientLocations: null,
  foreground: null,
  onScroll: null
}
