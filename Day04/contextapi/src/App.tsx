import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import User from './components/User'
import { UserContext } from './hooks/rootContext'

type Props = {}

const App = (props: Props) => {
  return (
    <UserContext.Provider value={{name:'Mike',age:25}}
    >
      <SafeAreaView>
        <Text>App</Text>
        <User />
      </SafeAreaView>
    </UserContext.Provider>
  )
}

export default App