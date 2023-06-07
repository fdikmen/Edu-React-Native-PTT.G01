import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import User from './components/User'

type Props = {}

const App = (props: Props) => {
  return (
    <SafeAreaView>
      <Text>App</Text>
      <User />
    </SafeAreaView>
  )
}

export default App