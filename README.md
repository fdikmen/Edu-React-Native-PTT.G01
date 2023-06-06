# Edu-React-Native-PTT.G01
Edu-React-Native-PTT.G01


## 05062023 (Day01)

01. React Native
02. Components
03. export - import - as
04. Folder Structure
05. ES7+ React/Redux/React-Native snippets | React Native Snippet | Prettier - Code formatter
06. Styles
07. View - Text
08. Commands <br/>
Create React Project
```
npx react-native init [Project-Name]
```
Start Metro
```
npm run start
```
Deploy to Device
```
npm run ios / npm run android
```
Exit Terminal
```
CTRL + C
```
09. Props
10. Flex - flexDirection
11. State
12. Counter
---
## 06062023 (Day02)

01. Summary
02. Create First App
- Create JS/JSX App
```
npx create-react-native-app [Project-Name]
```
- Create TS/TSX App
```
npx react-native init [Project-Name]
```
03. Button (title | onPress | color | disabled)
04. Event Handler
05. Alert.alert('XXXX') | Alert.prompt('title','msg',func) -> IOS
06. Image (source->{require}  | @2x @3x @4x | source->{{uri}})
- resizeMode (contain, cover, center, repeat, stretch )
- style {{width-height}}
07. Touchables => TouchableOpacity & TouchableHighlight & TouchableWithoutFeedback
08. TextInput (onChangeText, value, placeholder, style, 
secureTextEntry={true}, editable={false}, keyboardType='number-pad', autoCapitalize='characters')
IOS Keyboard Show => SHIFT+CMD+K
09. ScrollView (horizontal={true},pagingEnabled={true} )  -> ListView
10. Dimensions
Dimensions.get('window').width | Dimensions.get('window').height;
Dimensions.addEventListener('change', onChange);
Dimensions.removeEventListener('change', onChange);
11. SafeAreaView
12. Platform Based Components .ios/.android | Platform.OS - (ios - android) | Platform.Version

Style Sampel=> https://reactnative.dev/docs/platform-specific-code
13. Class Component + Function Comp
14. LifeCycle -> useEffect
15. Hooks -> useState & useEffect
16. Fetch
-  https://jsonplaceholder.typicode.com
- https://mockapi.io
- https://www.mockaroo.com
17. Axios
```
npm i axios
```
13. FlatList (data | renderItem | keyExtractor | listEmptyComponent | ListHeaderComponent )
14. PhoneBook App
---
> BUG FIXED: Address already in use :::8081
 (SOLUTION)[https://medium.com/@fdikmen/react-nativede-port-çakışması-sorunu-ve-çözümü-10d2306acaec]
 ---

 15. SpreadOperator

 | ...Platform.select({ -> in style