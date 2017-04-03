import React, {Component} from 'react';
import {
	View,
	Text,
	Image,
	ScrollView,
	Dimensions,
	Animated
} from 'react-native';
import Styles from './styles';
import LinearGradient from 'react-native-linear-gradient';

export default class StretchyHeader extends Component {

	constructor(props) {
		super(props);
		this.imageHeight = props.imageHeight || 300;
		this.wWidth = Dimensions.get('window').width;
		this.wHeight = Dimensions.get('window').height;
		this.state = {
				scaleAnim: new Animated.Value(1)
		};
	}

	componentDidMount() {
		if(this.props.onScroll) {
			this.state.scaleAnim.addListener((value)=> {this.props.onScroll(value.value)});
		}
	}

	render() {
		return(
			<View style={[Styles.container, {backgroundColor: this.props.backgroundColor || '#FFF'}]}>
				<View style={[Styles.photoContainer, {height: this.imageHeight, width: this.wWidth}]}>
					<Animated.Image 
						style={[Styles.photo, {
							transform: [
								{
										translateY: this.state.scaleAnim.interpolate({
												inputRange: [-this.imageHeight, 0, this.imageHeight],
												outputRange: [this.imageHeight/2, 0, -this.imageHeight/2]
										})
								},
								{
										scale: this.state.scaleAnim.interpolate({
												inputRange: [-this.imageHeight, 0, this.imageHeight],
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
					<View style={[Styles.headerContainer, {height: this.imageHeight}]}>
							<Text style={Styles.title}>{this.props.title}</Text>
							<Text style={Styles.subtitle}>{this.props.subtitle}</Text>
					</View>
					<View style={{backgroundColor: this.props.backgroundColor || '#FFF', minHeight: this.wHeight - this.imageHeight}}>
							{this.props.children}
					</View>
				</ScrollView>
			</View>
		)
	}
}