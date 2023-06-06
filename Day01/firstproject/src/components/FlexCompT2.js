//Created by RNFE snippet
import { View, Text } from 'react-native'
import React from 'react'

const FlexComp = () => {
  return (
    //stretch | flex-start | flex-end | center | baseline
    <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <View style={{width:50,height:50, backgroundColor:'red'}}></View>
        <View style={{width:150,height:50, backgroundColor:'green'}}></View>
        <View style={{width:250,height:50,backgroundColor:'blue'}}></View>
    </View>
  )
}

export default FlexComp