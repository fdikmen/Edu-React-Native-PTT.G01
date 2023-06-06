//tsrnfs
import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

type Props = {}

const ButtonSample = (props: Props) => {

  const [name, setName] = useState('')

  const onPressHandler = () => {
    console.log("Button pressed")
    // alert("Button pressed")
    Alert.alert("Button pressed " + new Date().toLocaleTimeString())
    Alert.prompt("What's your Name?" , "Enter your name", (text) => {
      setName(text)
    })
  }
  return (
    <View style={mystyles.btnContainer}>
      <Text>Button</Text>
      <Text>Button</Text>
      <Text>Button</Text>
      <Text>Button</Text>
      {/* //Button */}
      <Button title="Click me" onPress={onPressHandler} color="#2196F3" disabled={false} />
      <Text>NAME : {name}</Text>
    </View>
  )
}

export default ButtonSample

const mystyles = StyleSheet.create({
  btnStyle: { 
    backgroundColor: 'red',
    color: 'white',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10
  },
  btnContainer: {
    backgroundColor: 'yellow',
    padding: 10,
    // margin: 10,
    borderWidth:2
  }
})