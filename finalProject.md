1. npx react-native init finalProject
2. npm run ios | npm run android
3. npm install @react-navigation/native
4. npm install react-native-screens react-native-safe-area-context
5. (For IOS) npx pod-install ios
6. Delete the existing App.tsx file.
7. Create the src/App/App.tsx file and coding it with the tsrnf snippet. (App.tsx)
8. Fix App.tsx import =>import App from './src/App/App'; (index.js)
9. Add NavigationContainer in App.tsx. (App.tsx)
10. npm install @react-navigation/native-stack
11. npm install @react-navigation/bottom-tabs
12. For Navigation, stop and recompile the project. (CTRL + C && npm run ios || anroid)
13. npm install @reduxjs/toolkit react-redux
14. Coding store (src/App/store.tsx)
15. npm i axios
16. Coding axios instance (src/api/axiosConfig.tsx)
17. Coding userSlice.tsx file. (src/redux/userSlice.tsx)
18. Added userReducer in store (src/app/store.tsx)
19. Coding Screens - src/screens/[...screen-component...] with tsrnf
FormScreen.tsx - HomeScreen.tsx - LoginScreen.tsx - ProfileScreen.tsx 
20. Coding Tab and Stack Navigation
src/navigations/TabNavigation.tsx - StackNavigation.tsx
21. Using StackNavigation in App component. (src/app/App.tsx)
22. Coding Custom Button Component (src/components/CButton.tsx)
23. Coding Custom Form Component (src/components/LoginForm.tsx)
24. Added Logo (src/assets/images/logo-white.png)
25. Coding LoginScreen (src/screens/LoginScreen.tsx)