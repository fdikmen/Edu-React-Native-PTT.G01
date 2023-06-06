import { Dimensions, StyleSheet, Text, View, Platform } from 'react-native'
import React, { useEffect } from 'react'

type Props = {}

const SizesSample = (props: Props) => {
    const width = Dimensions.get('window').width
    const height = Dimensions.get('screen').height

    const myPlatform = Platform.OS;
    const myVersion = Platform.Version;
    

  return (
    <View>
      <Text>SizesSample</Text>
      <Text>Width : {width}</Text>
      <Text>Height : {height}</Text>
      <Text>OS : {myPlatform}</Text>
      <Text>OS V: {myVersion}</Text>
    </View>
  )
}

export default SizesSample

const styles = StyleSheet.create({})