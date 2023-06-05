//Created by RNFE snippet
import { View, Text } from 'react-native'
import React from 'react'

const FlexComp = () => {
  return (
    // wrap | nowrap | wrap-reverse
    <View style={{flex:1,flexDirection:'row',flexWrap:'nowrap'}}>
        <View style={{width:150,height:50, backgroundColor:'red'}}></View>
        <View style={{width:150,height:50, backgroundColor:'green'}}></View>
        <View style={{width:150,height:50,backgroundColor:'blue'}}></View>
    </View>
  )
}

export default FlexComp