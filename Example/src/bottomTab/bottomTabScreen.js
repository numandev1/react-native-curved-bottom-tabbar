import 'react-native-gesture-handler';
import React, { Component } from 'react'
import { Text, StyleSheet, View, Dimensions, StatusBar } from 'react-native'
import ReanimatedCurveTabBar from 'reanimated-curved-tabs-bar';
const { height, width } = Dimensions.get('window');
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const ARRAY_LENGTH = 7;

const Screens = [...Array(ARRAY_LENGTH)].map((item, index) =>
    (props) =>
        <View style={{ width, height, backgroundColor: 'eee', alignItems: 'center', justifyContent: 'center' }}>
            <Text>{(index + 1) + ''}</Text>
        </View>
)

export default class NavBar extends Component {

    render() {
        return (
            <Tab.Navigator
                tabBar={props =>
                    <ReanimatedCurveTabBar
                        {...props}
                        tabColor={'#4527a0'}
                        backgroundColor={'#000070'}
                        reactNaviagtionBar={true}
                        height={175}
                        iconTranslateY={-10}
                        lockTranslateYAnime={true}
                        iconsArray={[...Array(ARRAY_LENGTH)].map((item, index) =>
                            (<View style={styles.icon}>
                                <Text>{index + 1}</Text>
                            </View>)
                        )}
                        allowDropAnime={true}
                    />}
            >
                <Tab.Screen name={"1"} component={Screens[0]} />
                <Tab.Screen name={"2"} component={Screens[1]} />
                <Tab.Screen name={"3"} component={Screens[2]} />
                <Tab.Screen name={"4"} component={Screens[3]} />
                <Tab.Screen name={"5"} component={Screens[4]} />
                <Tab.Screen name={"6"} component={Screens[5]} />
                <Tab.Screen name={"7"} component={Screens[6]} />
            </Tab.Navigator>
        )
    }
}

const styles = StyleSheet.create({
    con: {
        flex: 1,
        width: width,
        height: height,
        backgroundColor: 'black'
    },
    icon: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eee',
        height: 40,
        width: 40,
        borderRadius: 20,
    }
})