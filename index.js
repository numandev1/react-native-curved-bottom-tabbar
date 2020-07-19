import React, { useRef } from 'react';
import { StyleSheet, View, Dimensions, I18nManager } from 'react-native';
I18nManager.allowRTL(false);
import Animated, { Easing, useCode } from 'react-native-reanimated';
import { TapGestureHandler, State } from 'react-native-gesture-handler';

const tran = 'transparent';

const {
	interpolate,
	set,
	cond,
	startClock,
	stopClock,
	clockRunning,
	block,
	timing,
	Value,
	Clock,
	onChange,
	and,
	call,
	eq,
	neq,
	greaterOrEq,
	lessThan,
} = Animated;

const { width } = Dimensions.get('window');

function runTiming(clock, value, dest, animeDuration) {
	const state = {
		finished: new Value(0),
		position: new Value(0),
		time: new Value(0),
		frameTime: new Value(0),
	};

	const config = {
		duration: animeDuration,
		toValue: new Value(0),
		easing: Easing.inOut(Easing.ease),
	};

	return block([
		cond(clockRunning(clock), 0, [
			set(state.finished, 0),
			set(state.time, 0),
			set(state.position, value),
			set(state.frameTime, 0),
			set(config.toValue, dest),
			startClock(clock),
		]),
		timing(clock, state, config),
		cond(state.finished, stopClock(clock)),
		state.position,
	]);
}

const CurvedTabBar = (props) => {

	const btnsNumber = props.iconsArray.length;
	const sidesRadius = props.sidesRadius;
	const LTA = props.lockTranslateYAnime;
	const LSA = props.lockScaleAnime;
	const sizeh = props.height;
	const blockHeight = sizeh / 5;
	const marginBottomVal = (1.3 + (props.marginBottom * 0.02));
	const rad = blockHeight * marginBottomVal;  // change size of circle 1.7-1.8 (distance from ground)
	const circleRad = (rad / (2 - ((1 - btnsNumber / 7) * 0.1)));

	const animeDuration = props.duration;
	const btnWidth = width / btnsNumber;

	const startRange = useRef(new Value(- width + (btnWidth / 2) - (rad / 2))).current;
	const endRange = useRef(new Value(- width + (btnWidth / 2) - (rad / 2))).current;
	const pressedBtn = useRef(new Value(0)).current;
	const normal = useRef(new Value(1)).current;
	// const zero = useRef(new Value(0)).current;
	// const normalRadian = useValue(Math.PI * 2);
	const stateVal = useRef(new Value(0)).current;
	const xVal = useRef(new Value(0)).current;

	const timingX = useRef(runTiming(new Clock(0), State.BEGAN, State.END, animeDuration)).current;

	const translateX = interpolate(timingX, {
		inputRange: [State.BEGAN, State.END],
		outputRange: [startRange, endRange]
	});

	const scale = LSA ?
		interpolate(timingX, {
			inputRange: [State.BEGAN, State.END],
			outputRange: [1, props.scale]
		}) :
		interpolate(timingX, {
			inputRange: [State.BEGAN, State.ACTIVE, State.END],
			outputRange: [1, props.scale, 1]
		});

	const scaleYCircle = interpolate(timingX, {
		inputRange: [State.BEGAN, State.ACTIVE, State.END],
		outputRange: [1, props.scaleYCircle, 1]
	});

	const iconSize = interpolate(timingX, {
		inputRange: [State.BEGAN, State.END],
		outputRange: [0, btnWidth / 2]
	});

	const iconOpacity = interpolate(timingX, {
		inputRange: [State.BEGAN, State.END],
		outputRange: [0, 1]
	});



	const translateY = LTA ?
		interpolate(timingX, {
			inputRange: [State.BEGAN, State.END],
			outputRange: [1, props.translateY]
		}) :
		interpolate(timingX, {
			inputRange: [State.BEGAN, State.ACTIVE, State.END],
			outputRange: [1, props.translateY, 1]
		});

	// const rotate = interpolate(timingX, {
	//     inputRange: [State.BEGAN, State.END],
	//     outputRange: [Math.PI * 2, 1]
	// });

	// const borderRadiusCircle = useRef(interpolate(timingX, {
	//     inputRange: [State.BEGAN, State.ACTIVE, State.END],
	//     outputRange: [circleRad, circleRad + 100, circleRad]
	// })).current;

	// const borderRadiusBlock = useRef(interpolate(timingX, {
	//     inputRange: [State.BEGAN, State.ACTIVE, State.END],
	//     outputRange: [rad, rad + 100, rad]
	// })).current;


	const onPress = (btnBum) => {
		props.onPress(btnBum[0]);
	}

	const onHandlerStateChange = ({ nativeEvent }) => {
		const { x, state } = nativeEvent;
		xVal.setValue(x);
		stateVal.setValue(state);
	}

	useCode(
		() => block([
			onChange(
				[stateVal, xVal],
				[
					cond(and(greaterOrEq(btnsNumber, 1), lessThan(xVal, width * 1 / btnsNumber)),
						[
							set(endRange, (- width + (btnWidth / 2) - (rad / 2))),  // ! to match exact point!: add(x, -width)
							set(pressedBtn, 0),
							call([new Value(1)], onPress),
						]),
					cond(and(greaterOrEq(btnsNumber, 2), lessThan(xVal, width * 2 / btnsNumber), greaterOrEq(xVal, width * 1 / btnsNumber)),
						[
							set(endRange, ((width * 1 / btnsNumber) - width + (btnWidth / 2) - (rad / 2))),
							set(pressedBtn, 1),
							call([new Value(2)], onPress),
						]),
					cond(and(greaterOrEq(btnsNumber, 3), lessThan(xVal, width * 3 / btnsNumber), greaterOrEq(xVal, width * 2 / btnsNumber)),
						[
							set(endRange, ((width * 2 / btnsNumber) - width + (btnWidth / 2) - (rad / 2))),
							set(pressedBtn, 2),
							call([new Value(3)], onPress),
						]),
					cond(and(greaterOrEq(btnsNumber, 4), lessThan(xVal, width * 4 / btnsNumber), greaterOrEq(xVal, width * 3 / btnsNumber)),
						[
							set(endRange, ((width * 3 / btnsNumber) - width + (btnWidth / 2) - (rad / 2))),
							set(pressedBtn, 3),
							call([new Value(4)], onPress),
						]),
					cond(and(greaterOrEq(btnsNumber, 5), lessThan(xVal, width * 5 / btnsNumber), greaterOrEq(xVal, width * 4 / btnsNumber)),
						[
							set(endRange, ((width * 4 / btnsNumber) - width + (btnWidth / 2) - (rad / 2))),
							set(pressedBtn, 4),
							call([new Value(5)], onPress),
						]),
					cond(and(greaterOrEq(btnsNumber, 6), lessThan(xVal, width * 6 / btnsNumber), greaterOrEq(xVal, width * 5 / btnsNumber)),
						[
							set(endRange, ((width * 5 / btnsNumber) - width + (btnWidth / 2) - (rad / 2))),
							set(pressedBtn, 5),
							call([new Value(6)], onPress),
						]),
					cond(and(greaterOrEq(btnsNumber, 7), lessThan(xVal, width * 7 / btnsNumber), greaterOrEq(xVal, width * 6 / btnsNumber)),
						[
							set(endRange, ((width * 6 / btnsNumber) - width + (btnWidth / 2) - (rad / 2))),
							set(pressedBtn, 6),
							call([new Value(7)], onPress),
						]),
				],
			)
		]),
		[stateVal, xVal]
	);


	useCode(
		() => block([
			onChange(
				translateX,
				cond(eq(translateX, endRange),
					[
						set(startRange, endRange),
					],
				),
			)
		]),
		[translateX]
	);

	return (
		<>
			<View style={[styles.container, { height: sizeh, bottom: -rad * marginBottomVal, backgroundColor: props.tabColor, }, props.containerStyle]}>
				<View style={[styles.top, { bottom: sizeh - circleRad, height: circleRad + props.topGap, backgroundColor: props.backgroundColor }]} />

				<Animated.View style={[styles.block, {
					backgroundColor: props.tabColor,
					height: blockHeight,
					translateX,
					borderTopLeftRadius: blockHeight * sidesRadius,
					borderTopRightRadius: blockHeight * sidesRadius,
				}]}>
				</Animated.View>

				<Animated.View style={[styles.circle, {
					backgroundColor: props.backgroundColor,
					height: rad,
					width: rad,
					translateX,
					borderRadius: circleRad,
					// borderRadius: borderRadiusCircle,
					transform: [{ scaleY: scaleYCircle }],
					// width: borderRadiusBlock,
				}]}>

				</Animated.View>
				<Animated.View style={[styles.block, {
					backgroundColor: props.tabColor,
					height: blockHeight,
					translateX,
					borderTopLeftRadius: blockHeight * sidesRadius,
					borderTopRightRadius: blockHeight * sidesRadius,
				}]}>

				</Animated.View>
			</View>
			<TapGestureHandler
				onHandlerStateChange={onHandlerStateChange}
			>
				<Animated.View style={[styles.btnsWrap, { height: rad }]}>
					{props.iconsArray.map((item, index) => {
						return (
							<Animated.View key={index} style={[styles.btnIconWrap, {
								width: btnWidth,
								transform: [{
									scale:
										cond(neq(index, pressedBtn),
											neq(props.scale, 0),
											scale,
											normal,
										),
									translateY:
										cond(neq(index, pressedBtn),
											neq(props.translateY, 0),
											translateY,
											normal,
										),
									// rotate:
									//     cond(neq(index, pressedBtn),
									//         neq(props.rotate, 0),
									//         rotate,
									//         normalRadian,
									//         normalRadian,
									//     ),
								}]
							}]}>
								<Animated.View style={[styles.icon, {
									width: cond(neq(index, pressedBtn),
										btnWidth / 2,
										iconSize,
									),
									height: cond(neq(index, pressedBtn),
										btnWidth / 2,
										iconSize,
									),
									opacity: cond(neq(index, pressedBtn),
										1,
										iconOpacity,
									),
									borderRadius: btnWidth / 4,
									backgroundColor: props.tabColor,
								}]} >
									{item}
								</Animated.View>

							</Animated.View>
						)
					})}
				</Animated.View>
			</TapGestureHandler>
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: width,
		position: 'absolute',
		flexDirection: 'row',
	},
	block: {
		width: width,
	},
	circle: {
	},
	top: {
		width: width,
		position: 'absolute',
	},
	btnsWrap: {
		position: 'absolute',
		flexDirection: 'row',
		width: width,
		bottom: 0,
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	btnIconWrap: {
		height: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	icon: {
		alignItems: 'center',
		justifyContent: 'center',
	}
});

function areEqual() {
	return true;
}

export default React.memo(CurvedTabBar, areEqual) 
