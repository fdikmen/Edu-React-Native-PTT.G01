import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Detail from './Detail'

type Props = {}

const Profile = (props: Props) => {
  return (
    <View>
      <Text>Profile</Text>
      <Detail />
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})