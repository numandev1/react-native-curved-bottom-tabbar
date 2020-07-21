# react-native-reanimated-curved-tab-bar
### 
### react-native-reanimated, react-native-gesture-handler ARE peerDependencies 
### 

## Getting started

`$ npm install reanimated-curved-tabs-bar --save`

or

`$ yarn add reanimated-curved-tabs-bar`

Requierd Dependencies: [react-native-gesture-handler](https://kmagiera.github.io/react-native-gesture-handler/docs/getting-started.html) and [react-native-reanimated](https://github.com/kmagiera/react-native-reanimated).

## Basic Usage
```javascript
import ReanimatedCurvedTabBar from 'reanimated-curved-tabs-bar';

// TODO: 
      <View style={styles.con}>
        <ReanimatedCurveTabBar

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

        />
      </View>
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

| name                      | required | default | description | type | 
| ------------------------- | -------- | ------- | ------------|------|
| height                    | yes      |    15   | Nav bar height  | Number |
| iconsArray                | yes      |    0    | [<Component1>, ...<Component7>] // MAX iS 7! | Array |
| onPress                   | yes      |         | Return the number of the pressed icon (1-7) | Method |
| topGap                    | no       |    0    | Top Gap height | Number |
| tabColor                  | no       |    'white'    | Tabs color | Color |
| backgroundColor           | no       |    'dodgerblue'    | Background color | Color |
| duration                  | no       |   300   | Animation duration | Number |
| sidesRadius               | no       |   1   | multipling the default sides radius 0.1 - 1 | Number |
| marginBottom              | no       |   23   | Icons marginBottom (distance from ground). recommended values depends on component height | Number |
| scaleYCircle              | no       |   1.4  | Glich animation in the bottom of picked icon. Recommended values: 0.7 - 1.4 | Number |
| iconTranslateY            | no       |   -10  | Picked icon translateY Animation. - => top ; + => bottom | Number |
| lockTranslateYAnime       | no       |        | Active icon translateY animation | Boolean |
| iconScale                 | no       |   1.4  | Picked icon scaling animation | Number |
| lockScaleAnime            | no       |        | Active icon scaling animation | Boolean |
| iconDropY                 | no       |   30   | Icons drop down animation | Number |
| allowDropAnime            | no       |        | Active Icons drop down animation | Boolean |
| allowDropAnime            | no       |        | First icon will also drop down | Boolean |


