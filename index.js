import React, {Component} from 'react';
import {
	View,
	Text,
	Image,
	ScrollView,
	Dimensions,
	Animated
} from 'react-native';
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource'
import Styles from './styles';
import LinearGradient from 'react-native-linear-gradient';

export default class StretchyHeader extends Component {

	constructor(props) {
		super(props);
		this.wWidth = Dimensions.get('window').width;
		this.wHeight = Dimensions.get('window').height;
		this.state = {
				scaleAnim: new Animated.Value(1)
				ratio: null,
		};
	}

	componentWillMount() {
		if (this.props.image.uri) {
			Image.getSize(this.props.uri, (width, height) => {
				this.setState({ ratio: width / height })
			})
		} else {
			const { width, height } = resolveAssetSource(this.props.image)
			this.setState({ ratio: width / height })
		}
	}

	componentDidMount() {
		if(this.props.onScroll) {
			this.state.scaleAnim.addListener((value)=> {this.props.onScroll(value.value)});
		}
	}

	render() {
		const { ratio } = this.state
		const height = ratio > 1 ? this.wWidth / ratio : this.wWidth * ratio
		return(
			<View style={[Styles.container, {backgroundColor: this.props.backgroundColor || '#FFF'}]}>
				<View style={[Styles.photoContainer, {height, width: this.wWidth}]}>
					<Animated.Image
						style={[Styles.photo, {
							transform: [
								{
										translateY: this.state.scaleAnim.interpolate({
												inputRange: [-height, 0, height],
												outputRange: [height/2, 0, -height/2]
										})
								},
								{
										scale: this.state.scaleAnim.interpolate({
												inputRange: [-height, 0, height],
												outputRange: [2, 1, 1]
										})
								}
							]
						}]}
						source={this.props.image}
					>
						<LinearGradient style={{flex: 1}} colors={this.props.gradientColors} />
					</Animated.Image>
				</View>
				<ScrollView
					showsVerticalScrollIndicator={false}
					style={Styles.contentContainer}
					scrollEventThrottle={16}
					onScroll= {
							Animated.event([{nativeEvent: {contentOffset: {y: this.state.scaleAnim}}}])
					}
					>
					<View style={[Styles.headerContainer, {height}]}>
							<Text style={Styles.title}>{this.props.title}</Text>
							<Text style={Styles.subtitle}>{this.props.subtitle}</Text>
					</View>
					<View style={{backgroundColor: this.props.backgroundColor || '#FFF', minHeight: this.wHeight - height}}>
							{this.props.children}
					</View>
				</ScrollView>
			</View>
		)
	}
}
