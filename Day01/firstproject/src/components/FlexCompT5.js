//Created by RNFE snippet
import { View, Text } from 'react-native'
import React from 'react'

const FlexComp = () => {
  return (
    //flexGrow
    <View style={{flex:1}}>
        <View style={{width:150,height:50, backgroundColor:'red'}}></View>
        <View style={{width:150,flexGrow:1, backgroundColor:'green'}}></View>
        <View style={{width:150,flexGrow:2,backgroundColor:'blue'}}></View>
    </View>
  )
}

export default FlexComp