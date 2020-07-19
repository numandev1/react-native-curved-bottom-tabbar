# react-native-reanimated-curve-tab-bar

### react-native-reanimated, react-native-gesture-handler ARE peerDependencies 

## Getting started

`$ npm install react-native-reanimated-curve-tab-bar --save`

or

`$ yarn add react-native-reanimated-curve-tab-bar`


### Mostly automatic installation

`$ react-native link react-native-reanimated-curve-tab-bar`

## Usage
```javascript
import ReanimatedCurveTabBar from 'react-native-reanimated-curve-tab-bar';

// TODO: 
                <Mnav
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
                    backgroundColor={grad1}

                    sidesRadius={1} // multipling the default sides radius 0.1 - 1

                    iconsArray={[
                        <Text>{1}</Text>,
                        // ...
                        <Text>{7}</Text>
                    ]}
                />
```
