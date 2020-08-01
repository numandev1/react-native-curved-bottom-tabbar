import 'react-native-gesture-handler';
import React, { Component } from 'react'
import { Text, StyleSheet, View, Dimensions, StatusBar } from 'react-native'
import ReanimatedCurveTabBar from 'reanimated-curved-tabs-bar';
const { height, width } = Dimensions.get('window');

const ARRAY_LENGTH = 1;

export default class NavBar extends Component {

    render() {

        return (
            <View style={styles.con}>
                <ReanimatedCurveTabBar

                    // Nav bar height  
                    // ** Required
                    height={250}

                    // Array of components (icons) []
                    // ** Required
                    iconsArray={[...Array(ARRAY_LENGTH)].map((item, index) =>
                        (<View style={styles.icon}>
                            <Text style={{fontSize:40}}>{index + 1}</Text>
                        </View>)
                    )}

                    screensBackground={'#eee'}

                    // Return icon number
                    // ** Required
                    onPress={(btnNum) => alert('Do something')}

                    // Top Gap height 
                    // (default 15) 
                    topGap={15}

                    tabColor={'white'}
                    backgroundColor={'tomato'}

                    // Animation duration
                    // (default 300) 
                    duration={500}


                    // multipling the default sides radius 0.1 - 1
                    // (default 1)
                    sidesRadius={1}

                    // Icons marginBottom (distance from ground). 
                    // recommended values depends on component height
                    // (default 23)
                    marginBottom={23}

                    // Glich animation in the bottom of picked icon. 
                    // Recommended values: 0.7 - 1.4 
                    // (default 1.4)
                    scaleYCircle={1.1}

                    // Icon translateY. - => top ; + => bottom
                    // (default -10)
                    iconTranslateY={-20}
                    lockTranslateYAnime={true}

                    // icon scale animation
                    // (default 1.4)
                    iconScale={0.4}
                    lockScaleAnime={true}

                />
            </View>
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
        height: 100,
        width: 100,
        borderRadius: 50,
    }
})