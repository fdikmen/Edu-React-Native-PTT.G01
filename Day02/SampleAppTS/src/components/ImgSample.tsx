import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
const imgcat = require('../assets/cat.png')

type Props = {}

const ImgSample = (props: Props) => {
  return (
    <View style={mystyles.container}>
      <Text>ImgSample</Text>
      <Image source={require('../assets/cat.png')} style={{width:100, height:100}}/>
      <Image source={imgcat} style={{width:100, height:100}}/>
      <Image source={{uri:'https://picsum.photos/200/300'}} style={{width:300, height:200,borderWidth:2}}
      resizeMode='center'
      />
    </View>
  )
}
const mystyles=StyleSheet.create({
    container:{
        borderWidth:2,
        padding:10,
        marginTop:30,
        // flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
})


export default ImgSample
