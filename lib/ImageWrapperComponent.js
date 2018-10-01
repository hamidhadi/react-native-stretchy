import React, { Component } from 'react'
import {
  View,
  Animated,
  ImageBackground,
} from 'react-native'
import PropTypes from 'prop-types'
import LinearGradient from 'react-native-linear-gradient'

import Styles from './styles'

const AnimatedImageBackground = Animated.createAnimatedComponent(ImageBackground)

export default class ImageWrapperComponent extends Component {
  constructor (props) {
    super(props)

    this.state = {
      scaleAnimation: new Animated.Value(1)
    }
  }

  componentDidMount () {
    if (this.props.onScroll) {
      this.state.scaleAnimation.addListener(({ value }) => this.props.onScroll(value))
    }
  }

  measure (callback) {
    this.wrapper.measure((ox, oy, width, height, px, py) => callback(ox, oy, width, height, px, py))
  }

  get animation () {
    return this.state.scaleAnimation
  }

  render () {
    const {
      height,
      image,
      imageResizeMode,
      imageWrapperStyle,
      gradientColors,
      gradientStart,
      gradientEnd,
      gradientLocations,
      onImageLoad,
      onScroll
    } = this.props

    return (
      <View
        style={[imageWrapperStyle, Styles.photoContainer, {height}]}
        ref={me => this.wrapper = me}
      >
        <AnimatedImageBackground
          source={image}
          resizeMode={imageResizeMode}
          onLoad={() => onImageLoad()}
          style={[Styles.photo, {
            transform: [
              {
                translateY: this.state.scaleAnimation.interpolate({
                  inputRange: [-height, 0, height],
                  outputRange: [height / 2, 0, -height / 2]
                })
              },
              {
                scale: this.state.scaleAnimation.interpolate({
                  inputRange: [-height, 0, height],
                  outputRange: [2, 1, 1]
                })
              }
            ]
          }]}
        >
          {gradientColors.length > 0 &&
            <LinearGradient
              style={{flex: 1}}
              colors={gradientColors}
              start={gradientStart}
              end={gradientEnd}
              locations={gradientLocations}
            />
          }
        </AnimatedImageBackground>
      </View>
    )
  }
}

ImageWrapperComponent.propTypes = {
  image: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number
  ]),
  imageResizeMode: PropTypes.oneOf(['cover', 'contain', 'stretch', 'repeat']),
  imageWrapperStyle: PropTypes.object,
  gradientColors: PropTypes.array,
  gradientStart: PropTypes.object,
  gradientEnd: PropTypes.object,
  gradientLocations: PropTypes.arrayOf(PropTypes.number),
  onScroll: PropTypes.func
}

ImageWrapperComponent.defaultProps = {
  image: null,
  imageResizeMode: 'cover',
  imageWrapperStyle: null,
  gradientColors: [],
  gradientStart: null,
  gradientEnd: null,
  gradientLocations: null,
  onScroll: null
}
