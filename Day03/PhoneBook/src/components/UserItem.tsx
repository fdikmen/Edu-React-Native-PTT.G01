import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {
  user: any
}

const UserItem = (props: Props) => {
  return (
    <View>
      <Text>
        {props.user.id}.
        {props.user.name}
      </Text>
    </View>
  )
}

export default UserItem

const styles = StyleSheet.create({})