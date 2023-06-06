import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {}

const UserCard = (props: Props) => {
  return (
    <View style={styles.userContainer}>
        <Image source={{uri: props.avatar}} style={{width: 40, height: 40}}/>
      <Text style={styles.userText}>{props.userId} {props.name}</Text>
      <Text> {props.isActive ? 'OK' : 'Not!'}</Text>
    </View>
  )
}

export default UserCard

const styles = StyleSheet.create({
    userContainer: {
        backgroundColor: 'lightblue',
        padding: 10,
        margin: 10,
        borderRadius: 10},
    userText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
})