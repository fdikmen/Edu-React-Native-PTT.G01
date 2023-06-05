//Created by RNFE snippet
import { View, Text } from 'react-native'
import React from 'react'

const FlexComp = () => {
  return (
    //flexGrow
    <View style={{flexDirection:'row'}}>
        <View style={{width:450,height:100, backgroundColor:'red',flexShrink:1}}></View>
        <View style={{width:450,height:100, backgroundColor:'green',flexShrink:2}}></View>
        <View style={{width:450,height:100, backgroundColor:'blue',flexShrink:2}}></View>
    </View>
  )
}

export default FlexComp