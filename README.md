### Would you like to support me?

<div align="center">
<a href="https://github.com/numandev1?tab=followers">
    <img src="https://img.shields.io/github/followers/numandev1?label=Follow%20%40numandev1&style=social" height="36" />
</a>
<a href="https://www.youtube.com/channel/UCYCUspfN7ZevgCj3W5GlFAw"><img src="https://img.shields.io/youtube/channel/subscribers/UCYCUspfN7ZevgCj3W5GlFAw?style=social" height="36" /><a/>
</br>
<a href="https://www.buymeacoffee.com/numan.dev" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>
</div>

---

# react-native-reanimated-curved-tab-bar

###

### react-native-reanimated, react-native-gesture-handler ARE peerDependencies

###

Built with [react-native-gesture-handler](https://github.com/kmagiera/react-native-gesture-handler) and [react-native-reanimated](https://github.com/kmagiera/react-native-reanimated).

Fully native 60 FPS animations.

| ![](gifs/1.gif) | ![](gifs/2.gif) | ![](gifs/3.gif) |
| :-------------: | :-------------: | :-------------: |

## Getting started

`$ npm install react-native-curved-bottom-tabbar --save`

or

`$ yarn add react-native-curved-bottom-tabbar`

Requierd Dependencies: [react-native-gesture-handler](https://kmagiera.github.io/react-native-gesture-handler/docs/getting-started.html) and [react-native-reanimated](https://github.com/kmagiera/react-native-reanimated).

## Basic Usage

```javascript
import ReanimatedCurvedTabBar from "react-native-curved-bottom-tabbar";

// TODO:
<View style={styles.con}>
  <ReanimatedCurveTabBar
    // ** Required
    height={230}
    // Array of components (icons) []
    // ** Required
    iconsArray={[...Array(ARRAY_LENGTH)].map((item, index) => (
      <View style={styles.icon}>
        <Text>{index + 1}</Text>
      </View>
    ))}
    // Return icon number
    onPress={(btnNum) => console.log(btnNum)}
    allowDropAnime={true}
  />
</View>;
```

##

## With Screens Navigation

```javascript
<View style={styles.con}>
  <ReanimatedCurveTabBar
    // ** Required
    height={230}
    // ** Required
    iconsArray={[...Array(ARRAY_LENGTH)].map((item, index) => (
      <View style={styles.icon}>
        <Text>{index + 1}</Text>
      </View>
    ))}
    onPress={(btnNum) => console.log(btnNum)}
    // Array of Screens
    screensArray={[...Array(ARRAY_LENGTH)].map((item, index) => (
      <View
        style={{
          width,
          height,
          backgroundColor: "eee",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>{index + 1}</Text>
      </View>
    ))}
    allowDropAnime={true}
  />
</View>
```

##

## As react-navigation/bottom-tabs's "tabBar"

```javascript
<NavigationContainer>
  <Tab.Navigator
    tabBar={(props) => (
      <ReanimatedCurveTabBar
        // ** Required
        {...props}
        // ** Required
        reactNaviagtionBar={true}
        // ** Required
        height={200}
        // ** Required
        iconsArray={[...Array(ARRAY_LENGTH)].map((item, index) => (
          <View style={styles.icon}>
            <Text>{index + 1}</Text>
          </View>
        ))}
        allowDropAnime={true}
      />
    )}
  >
    // Your Screens Here // ** Screens name property must be 1 - screens /
    iconsArray length // ** Screens number equal to iconsArray length // For
    more info look in Example
  </Tab.Navigator>
</NavigationContainer>
```

##

## Advanced Usage

```javascript

        <ReanimatedCurveTabBar

          height={230}

          iconsArray={[...Array(ARRAY_LENGTH)].map((item, index) =>
            (<View style={styles.icon}>
              <Text>{index + 1}</Text>
            </View>)
          )}

          onPress={(btnNum) => console.log(btnNum)}

          topGap={15}

          tabColor={'white'}
          backgroundColor={'firebrick'}

          duration={300}

          sidesRadius={1}

          marginBottom={23}

          scaleYCircle={1.4}

          iconTranslateY={-5}
          lockTranslateYAnime={true}

          iconScale={1.4}
          lockScaleAnime={true}

          iconDropY={30}
          allowDropAnime={true}
          dropWithFirst={false}

        />
      </View>
```

## Props

| name                | required | default      | description                                                                               | type    |
| ------------------- | -------- | ------------ | ----------------------------------------------------------------------------------------- | ------- |
| height              | yes      | 15           | Nav bar height                                                                            | Number  |
| iconsArray          | yes      | 0            | [<Component1>, ...<Component7>] // MAX iS 7!                                              | Array   |
| screensArray        | no       | 0            | [<Component1>, ...<Component7>] // MAX iS 7!                                              | Array   |
| onPress             | no       |              | Return the number of the pressed icon (1-7)                                               | Method  |
| reactNaviagtionBar  | no       |              | Use as react-navigation/bottom-tabs's "tabBar" property                                   | Boolean |
| topGap              | no       | 0            | Top Gap height                                                                            | Number  |
| tabColor            | no       | 'white'      | Tabs color                                                                                | Color   |
| backgroundColor     | no       | 'dodgerblue' | Background color                                                                          | Color   |
| duration            | no       | 300          | Animation duration                                                                        | Number  |
| sidesRadius         | no       | 1            | multipling the default sides radius 0.1 - 1                                               | Number  |
| marginBottom        | no       | 23           | Icons marginBottom (distance from ground). recommended values depends on component height | Number  |
| scaleYCircle        | no       | 1.4          | Glich animation in the bottom of picked icon. Recommended values: 0.7 - 1.4               | Number  |
| iconTranslateY      | no       | -10          | Picked icon translateY Animation. - => top ; + => bottom                                  | Number  |
| lockTranslateYAnime | no       |              | Active icon translateY animation                                                          | Boolean |
| iconScale           | no       | 1.4          | Picked icon scaling animation                                                             | Number  |
| lockScaleAnime      | no       |              | Active icon scaling animation                                                             | Boolean |
| iconDropY           | no       | 30           | Icons drop down animation                                                                 | Number  |
| allowDropAnime      | no       |              | Active Icons drop down animation                                                          | Boolean |
| allowDropAnime      | no       |              | First icon will also drop down                                                            | Boolean |
