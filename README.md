# react-native-stretchy
A ReactNative scrollable stretchy header component

![StretchyBatman](/demo.gif)

## Installation

You can install this package via `yarn`:
```bash
yarn add react-native-stretchy --save
```

or `npm`

```bash
npm install react-native-stretchy --save
```
**NOTE**: Link [react-native-linear-gradient](https://github.com/react-native-community/react-native-linear-gradient) to your project.

## Basic Usage

```js
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import StretchyHeader from 'react-native-stretchy';

class MyStretchyHeader extends Component {
  render() {
    return (
      <StretchyHeader
          image={{uri: 'https://example.com/myImageAddress'}}
          gradientColors={["#000", "transparent", "#000"]}
          onScroll={position => console.log(position)}
      >
          <Text>Foo</Text>
          <Text>Bar</Text>
      </StretchyHeader>
    );
  }
}
```


## Properties

| Prop          | Default | Description|
|---------------|:-------:|------------|
|backgroundColor|`#FFF`     | Background color of the inner content
|image          |`null`     |The image of the stretchy header ([RN image source](https://facebook.github.io/react-native/docs/images.html))
|gradientColors |`[]`       |The array of string colors for gradient
|foreground     |`null`     |A RN Component for foreground content of background
|onScroll       |`null`     |A function that gets the position of the scroll

### Additional props of gradient are also available
| Prop            | Default |
|-----------------|:-------:|
|gradientStart    |null     |
|gradientEnd      |null     |
|gradientLocations|null     |

## Contribution

You can fork the repository, improve or fix some part of it and then send the pull requests back if you want to see them here. I really appreciate that. :wink:


## License

Licensed under the [MIT License](https://github.com/hamidhadi/react-native-stretchy/blob/master/LICENSE).
