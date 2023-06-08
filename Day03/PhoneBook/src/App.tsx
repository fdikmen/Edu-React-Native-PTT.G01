import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import User from './components/User'
import SampleComp from './components/SampleComp'

type Props = {}

const App = (props: Props) => {
  return (
    <SafeAreaView>
      {/* <Text>App</Text> */}
      <User />
      {/* <SampleComp> */}
        {/* Children */}
      {/* </SampleComp> */}
    </SafeAreaView>
  )
}

export default App