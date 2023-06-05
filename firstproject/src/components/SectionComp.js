import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {}

const SectionComp = (props: Props) => {
  return (
    
    <View style={AppStyles.container}>
      <Text style={{color:'blue'}}>App {4+4}</Text>
      <Text style={AppStyles.text}>App {4+4}</Text>
    </View>
  )
}

export default SectionComp

const AppStyles = StyleSheet.create({
  container: {
    backgroundColor: 'orange',
    padding: 10,
    marginTop: 20
  },
  btn:{
    backgroundColor: 'red',
    padding: 10,
    marginTop: 20
  },
  text:{
    color: 'white'
  }
})