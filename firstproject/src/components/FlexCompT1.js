//Created by RNFE snippet
import { View, Text } from 'react-native'
import React from 'react'

const FlexComp = () => {
  return (
    //space-between | flex-start | flex-end | center | space-around | space-evenly
    <View style={{flex:1,flexDirection:'row',justifyContent:'space-evenly'}}>
        <View style={{width:50,height:150, backgroundColor:'red'}}></View>
        <View style={{width:150,height:50, backgroundColor:'green'}}></View>
        <View style={{width:50, height:150,backgroundColor:'blue'}}></View>
    </View>
  )
}

export default FlexComp