//Created by RNFE snippet
import { View, Text } from 'react-native'
import React from 'react'

const FlexComp = () => {
  return (
    //stretch | flex-start | flex-end | center | baseline
    <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'baseline'}}>
        <Text style={{fontSize:20}}> Hello </Text>
        <Text style={{fontSize:50}}> World </Text>
    </View>
  )
}

export default FlexComp