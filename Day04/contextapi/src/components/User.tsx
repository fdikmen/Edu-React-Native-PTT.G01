import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Profile from './Profile'

type Props = {}

const User = (props: Props) => {
  return (
    <View>
      <Text>User</Text>
      <Profile />
    </View>
  )
}

export default User

const styles = StyleSheet.create({})