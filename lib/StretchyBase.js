import React, { Component } from 'react'
import { Dimensions, Image } from 'react-native'

import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource'

export default class StretchyBase extends Component {
  constructor (props) {
    super(props)

    this.wWidth = Dimensions.get('window').width
    this.wHeight = Dimensions.get('window').height
    this.state = {
      ratio: null,
      imageIsLoaded: false
    }
  }

  componentWillMount () {
    const { image } = this.props

    if (image.uri) {
      Image.getSize(image.uri, (width, height) => {
        this.setState({ ratio: width / height })
      })
    } else {
      const { width, height } = resolveAssetSource(image)
      this.setState({ ratio: width / height })
    }
  }

  onScroll (value) {
    const { onScroll } = this.props

    this.imageWrapper.measure((ox, oy, width, height, px, py) => {
      let scrollReachesToBottomOfHeader = value >= height
      onScroll(value, scrollReachesToBottomOfHeader)
    })
  }

  onImageLoad () {
    this.setState({ imageIsLoaded: true })
  }

  generateImageHeight (imageHeight) {
    const { imageIsLoaded, ratio } = this.state

    if (imageIsLoaded) return imageHeight || (ratio > 1 ? this.wWidth / ratio : this.wWidth * ratio)

    return imageHeight || 100
  }
}