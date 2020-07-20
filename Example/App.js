import 'react-native-gesture-handler';
import React, { PureComponent } from 'react'
import { Text, StyleSheet, View, Dimensions } from 'react-native'
import ReanimatedCurveTabBar from 'reanimated-curved-tabs-bar';

const { height, width } = Dimensions.get('window');


export default class NavBar extends PureComponent {

  render() {
    return (
      <View style={styles.con}>
        <ReanimatedCurveTabBar
          duration={250}
          height={220}
          topGap={15}
          marginBottom={23}  // circle marginBottom:   1.7-1.8 (distance from ground)

          scaleYCircle={1.4}   // glich anime in the bottom of picked: 0.7- 1.4 

          translateY={-5}    // circle translateY: - => top ; + => bottom
          lockTranslateYAnime={true}

          scale={1.4}         // circle scale anime 
          lockScaleAnime={true}

          onPress={(btnNum) => console.log(btnNum)}

          tabColor={'white'}  // circle scale anime 
          backgroundColor={'#1166dd'}

          sidesRadius={1} // multipling the default sides radius 0.1 - 1

          iconsArray={[
            <View style={styles.icon}>
              <Text>{1}</Text>
            </View>,
            <View style={styles.icon}>
              <Text>{2}</Text>
            </View>,
            <View style={styles.icon}>
              <Text>{3}</Text>
            </View>,
            <View style={styles.icon}>
              <Text>{4}</Text>
            </View>,
            <View style={styles.icon}>
              <Text>{5}</Text>
            </View>,
            <View style={styles.icon}>
              <Text>{6}</Text>
            </View>,
          ]}
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
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eee',
    height: 40,
    width: 40,
    borderRadius: 20,
  }
})