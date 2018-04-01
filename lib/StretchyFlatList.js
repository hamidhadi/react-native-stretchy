import React, { Component } from 'react'
import {
  FlatList,
  View,
  Text,
  ImageBackground,
  Animated,
  Dimensions,
  Image
} from 'react-native'
import PropTypes from 'prop-types'
import StretchyBase from './StretchyBase'
import ImageWrapperComponent from './ImageWrapperComponent'
import Styles from './styles'

export default class StretchyFlatList extends StretchyBase {
  render () {
    const {
      backgroundColor,
      image,
      imageResizeMode,
      imageHeight,
      foreground,
      gradientColors,
      gradientStart,
      gradientEnd,
      gradientLocations,
      style,
      onScroll,
      data,
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
          gradientColors={gradientColors}
          gradientStart={gradientStart}
          gradientEnd={gradientEnd}
          gradientLocations={gradientLocations}
          onScroll={onScroll ? (value) => this.onScroll(value) : null}
          onImageLoad={() => this.onImageLoad()}
          ref={me => { this.imageWrapper = me }}
        />
        <FlatList
          {...otherProps}
          data={data}
          style={[style, Styles.contentContainer]}
          scrollEventThrottle={16}
          ListHeaderComponent={
            <View style={[Styles.foregroundContainer, {height}]}>
              {foreground}
            </View>
          }
          onScroll={
            this.imageWrapper &&
            Animated.event([{ nativeEvent: {contentOffset: {y: this.imageWrapper.animation}} }])
          }
        />
      </View>
    )
  }
}

StretchyFlatList.propTypes = {
  backgroundColor: PropTypes.string,
  image: PropTypes.object,
  imageHeight: PropTypes.number,
  imageResizeMode: PropTypes.oneOf(['cover', 'contain', 'stretch', 'repeat']),
  gradientColors: PropTypes.array,
  gradientStart: PropTypes.object,
  gradientEnd: PropTypes.object,
  gradientLocations: PropTypes.arrayOf(PropTypes.number),
  foreground: PropTypes.element,
  onScroll: PropTypes.func
}

StretchyFlatList.defaultProps = {
  backgroundColor: '#FFF',
  image: null,
  imageHeight: null,
  imageResizeMode: 'cover',
  gradientColors: [],
  gradientStart: null,
  gradientEnd: null,
  gradientLocations: null,
  foreground: null,
  onScroll: null
}