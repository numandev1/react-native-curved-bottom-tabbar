import 'react-native-gesture-handler';
import React, { Component } from 'react'
import { Text, StyleSheet, View, Dimensions, StatusBar } from 'react-native'
import ReanimatedCurveTabBar from 'reanimated-curved-tabs-bar';
const { height, width } = Dimensions.get('window');
StatusBar.setHidden(true)
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const ARRAY_LENGTH = 7;

const Screens = [...Array(ARRAY_LENGTH)].map((item, index) =>
  (props) =>
    <View style={{ width, height, backgroundColor: 'eee', alignItems: 'center', justifyContent: 'center' }}>
      <Text>{(index + 1) + ''}</Text>
    </View>
)

const reactNaviagtionBar = true;

export default class NavBar extends Component {

  render() {
    if (reactNaviagtionBar) {
      return (
        <NavigationContainer>
          <Tab.Navigator
            tabBar={props =>
              <ReanimatedCurveTabBar
                {...props}
                reactNaviagtionBar={true}
                height={200}
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
        </NavigationContainer>
      )
    } else {
      return (
        <View style={styles.con}>
          <ReanimatedCurveTabBar

            // Nav bar height  
            // ** Required
            height={200}

            // Array of components (icons) []
            // ** Required
            iconsArray={[...Array(ARRAY_LENGTH)].map((item, index) =>
              (<View style={styles.icon}>
                <Text>{index + 1}</Text>
              </View>)
            )}

            Array of components
            screensArray={[...Array(ARRAY_LENGTH)].map((item, index) =>
              (<View style={{ width, height, backgroundColor: 'eee', alignItems: 'center', justifyContent: 'center' }}>
                <Text>{index + 1}</Text>
              </View>)
            )}

            screensBackground={'#eee'}

            // Return icon number
            // ** Required
            onPress={(btnNum) => console.log(btnNum)}

            // Top Gap height 
            // (default 15) 
            topGap={15}

            tabColor={'tomato'}
            backgroundColor={'slateblue'}

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
            scaleYCircle={1.4}

            // Icon translateY. - => top ; + => bottom
            // (default -10)
            iconTranslateY={-5}
            lockTranslateYAnime={true}

            // icon scale animation
            // (default 1.4)
            iconScale={1.4}
            lockScaleAnime={true}

            // icons drop down animation
            // (default 30)
            iconDropY={30}
            allowDropAnime={true}
            // first icon will also drop down
            dropWithFirst={false}

          />
        </View>
      )
    }

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