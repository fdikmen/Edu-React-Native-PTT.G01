//tsrnf -> typescript react native functional
import { View, Text,SafeAreaView } from 'react-native'
import React from 'react'
import ButtonSample from './components/ButtonSample'
import ImgSample from './components/ImgSample'
import ToucheSample from './components/ToucheSample'
import InputSample from './components/InputSample'
import ScrollViewSample from './components/ScrollViewSample'
import SizesSample from './components/SizesSample'
import Footer from './components/Footer'
import ClassComp from './components/ClassComp'
import FuncComp from './components/FuncComp'
import Users from './components/Users'

type Props = {}

const App = (props: Props) => {
  return (
    <SafeAreaView>
      {/* <Text>APP</Text> */}
      {/* <ButtonSample /> */}
      {/* <ImgSample/> */}
      {/* <ToucheSample/> */}
      {/* <InputSample/> */}
      {/* <ScrollViewSample/> */}
      {/* <SizesSample/> */}
      {/* <Footer/> */}
      {/* <ClassComp surname="Emmmy"/> */}
      {/* <FuncComp surname="Emmmy"/> */}
      <Users/>
    </SafeAreaView>
  )
}

export default App