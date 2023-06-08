import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {
  user: any
}

const UserItem = (props: Props) => {
  return (
    <View style={mystyles.container}>
      <Image style={mystyles.avatar} source={{ uri: props.user.avatar }} />
      <View>
        <Text style={mystyles.name}>
          {props.user.id}.
        </Text>
        <Text style={mystyles.name}>
          {props.user.name}
        </Text>
      </View>
    </View>
  )
}

export default UserItem

const mystyles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#f5f5f5',
    flexDirection: 'row',
    padding:10
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius:25,
    marginRight:10},
  name: {
    fontSize: 16,
  }
})