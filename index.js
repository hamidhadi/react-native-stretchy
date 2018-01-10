import React, {Component} from 'react'
import {
  View,
  ImageBackground,
  Image,
  ScrollView,
  Dimensions,
  Animated
} from 'react-native'
import PropTypes from 'prop-types'
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource'
import LinearGradient from 'react-native-linear-gradient'
import Styles from './styles'

const AnimatedImageBackground = Animated.createAnimatedComponent(ImageBackground)

export default class StretchyHeader extends Component {
  constructor (props) {
    super(props)

    this.wWidth = Dimensions.get('window').width
    this.wHeight = Dimensions.get('window').height
    this.state = {
      scaleAnimation: new Animated.Value(1),
      ratio: null
    }
  }

  componentWillMount () {
    if (this.props.image.uri) {
      Image.getSize(this.props.image.uri, (width, height) => {
        this.setState({ ratio: width / height })
      })
    } else {
      const { width, height } = resolveAssetSource(this.props.image)
      this.setState({ ratio: width / height })
    }
  }

  componentDidMount () {
    if (this.props.onScroll) {
      this.state.scaleAnimation.addListener(({ value }) => this.props.onScroll(value))
    }
  }

  render () {
    const {
      backgroundColor,
      image,
      foreground,
      gradientColors,
      gradientStart,
      gradientEnd,
      gradientLocations,
      children
    } = this.props
    const { ratio } = this.state
    const height = ratio > 1 ? this.wWidth / ratio : this.wWidth * ratio

    return (
      <View style={[Styles.container, {backgroundColor}]}>
        <View style={[Styles.photoContainer, {height}]}>
          <AnimatedImageBackground
            source={image}
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
            <LinearGradient
              style={{flex: 1}}
              colors={gradientColors}
              start={gradientStart}
              end={gradientEnd}
              locations={gradientLocations}
            />
          </AnimatedImageBackground>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={Styles.contentContainer}
          scrollEventThrottle={16}
          onScroll={
            Animated.event([{ nativeEvent: {contentOffset: {y: this.state.scaleAnimation}} }])
          }
        >
          <View style={[Styles.foregroundContainer, {height}]}>
            {foreground}
          </View>
          <View style={{backgroundColor: backgroundColor, minHeight: this.wHeight - height}}>
            {children}
          </View>
        </ScrollView>
      </View>
    )
  }
}

StretchyHeader.propTypes = {
  backgroundColor: PropTypes.string,
  image: PropTypes.node,
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
  gradientColors: [],
  gradientStart: null,
  gradientEnd: null,
  gradientLocations: null,
  foreground: null,
  onScroll: null
}
