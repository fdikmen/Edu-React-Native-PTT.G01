import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

type Props = {}

const InputSample = (props: Props) => {
  const [phoneNumber, setPhoneNumber] = useState('123')
  return (
    <View>
      <Text>InputSample</Text>
      <TextInput placeholder="Enter your name"
        style={{ margin: 10, borderWidth: 2, padding: 5 }}
        secureTextEntry={false}
        // keyboardType='number-pad'
        onChangeText={(text) => { setPhoneNumber(text) }}
        value={phoneNumber}
        editable={true}
        // autoCapitalize='characters'
        // maxLength={10}
      />
      <Text>
        Phone Number :  {phoneNumber}
      </Text>
    </View>
  )
}

export default InputSample

const styles = StyleSheet.create({})