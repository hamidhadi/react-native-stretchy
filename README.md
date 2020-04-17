# react-native-stretchy

A ReactNative scrollable stretchy header component fully optimized for lists.

![StretchyBatman](/demo.gif)

## Installation

You can install this package via `yarn`:

```bash
yarn add react-native-stretchy
```

or `npm`

```bash
npm install react-native-stretchy --save
```

**NOTE**: Link [react-native-linear-gradient][1] to your project.

## Basic Usage

```js
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StretchyHeader } from 'react-native-stretchy';

class MyStretchyHeader extends Component {
  render() {
    return (
      <StretchyHeader
        image={{ uri: 'https://example.com/myImageAddress' }}
        gradient={{ colors: ['#000', 'transparent', '#000'] }}
        onScroll={(position, reachedToTheBottomOfHeader) =>
          console.log(position, reachedToTheBottomOfHeader)
        }>
        <Text>Foo</Text>
        <Text>Bar</Text>
      </StretchyHeader>
    );
  }
}
```

## Properties

These are default properties that is available for all stretchy components

| Prop            |  Default  | Description                                                                                                                                                                                                |
| --------------- | :-------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| backgroundColor |  `#FFF`   | Background color of the inner content                                                                                                                                                                      |
| image           |  `null`   | The image of the stretchy header ([RN image source][2])                                                                                                                                                    |
| imageHeight     |  `null`   | Height of the stretchy header image (keep ratio of `image` if not provided)                                                                                                                                |
| imageResizeMode | `'cover'` | ResizeMode of the stretchy header image. [You can use one of these values](https://facebook.github.io/react-native/docs/image.html#resizemode)                                                             |
| gradient        |   null    | Gradient config object. See [LinearGradientProps][3]                                                                                                                                                       |
| foreground      |  `null`   | A RN Component for foreground content of background                                                                                                                                                        |
| onScroll        |  `null`   | A callback function with these arguments:<br>`position`: current position of scroll<br>`reachedToTheBottomOfHeader`: boolean flag to specify whether the scroll has reached to the bottom of header or not |

## Components
### <b>`<StretchyHeader />`</b>
Simple ScrollView with stretchy header support.

### <b>`<StretchyFlatList />`</b>
If you want to use FlatList component with stretchy header support, you can use this component instead of StretchyHeader for better rendering and performance.<br>

### <b>`<StretchySectionList />`</b>
If you want to use SectionList component with stretchy header support, you can use this component instead of StretchyHeader for better rendering and performance.<br>

<i>NOTE: <br>
1. In addition to the default stretchy props, you can use all available props for `ScrollView`, `FlatList` and `SectionList`.<br>
2. You can find all available components usage in example project.</i>

## Run Example Project
To see all components in action you can run the Example project by following these steps:
1. Clone the project
2. Install node modules by running `npm i` or `yarn` at the root of project
3. Run `npm run watch` or `yarn watch` to compile and watch source files
4. Run `npm run start` or `yarn start` to start the RN packager and keep it open
5. Open `example.xcworkspace` from `/example/ios` and run the project from `XCode`

<i>NOTE: I changed the location of `iOS` and `Android` directories and even after specifying new locations on `react-native.config` we can't run the example project via RN cli. [See this issue][4]</i>

## Contribution
I'm still trying to improve the codebase of this package so if you have any idea in terms of the structure, features or anything else, please let me know by whether sending a PR or open an issue and start a discuession. I really appreciate that. :wink:

## License
Licensed under the [MIT License](https://github.com/hamidhadi/react-native-stretchy/blob/master/LICENSE).

[1]: https://github.com/react-native-community/react-native-linear-gradient
[2]: https://facebook.github.io/react-native/docs/images.html
[3]: https://github.com/react-native-community/react-native-linear-gradient/blob/master/index.d.ts
[4]: https://github.com/react-native-community/cli/issues/1103
