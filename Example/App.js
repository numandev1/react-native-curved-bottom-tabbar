import 'react-native-gesture-handler';
import React, { Component } from 'react'
import { Text, StyleSheet, View, Dimensions } from 'react-native'
import ReanimatedCurveTabBar from 'reanimated-curved-tabs-bar';
const { height, width } = Dimensions.get('window');

ARRAY_LENGTH = 5;

export default class NavBar extends Component {

  render() {
    return (
      <View style={styles.con}>
        <ReanimatedCurveTabBar

          // Nav bar height  
          // ** Required
          height={230}

          // Array of components (icons) []
          // ** Required
          iconsArray={[...Array(ARRAY_LENGTH)].map((item, index) =>
            (<View style={styles.icon}>
              <Text>{index + 1}</Text>
            </View>)
          )}

          // Return icon number
          // ** Required
          onPress={(btnNum) => console.log(btnNum)}

          // Top Gap height 
          // (default 15) 
          topGap={15}

          tabColor={'white'}
          backgroundColor={'firebrick'}

          // Animation duration
          // (default 300) 
          duration={300}


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




const styles = StyleSheet.create({
  con: {
    flex: 1,
    width: width,
    height: height,
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