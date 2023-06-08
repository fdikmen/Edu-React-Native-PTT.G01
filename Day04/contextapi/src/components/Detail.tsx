import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { UserContext } from '../hooks/rootContext'
type Props = {}

const Detail = (props: Props) => {
    const data =useContext(UserContext)
  return (
    <View>
      <Text style={styles.txt}>Detail</Text>
      <Text style={styles.txt}>{data.name}</Text>
      <Text style={styles.txt}>{data.age}</Text>
    </View>
  )
}

export default Detail

const styles = StyleSheet.create({
txt:{
    padding:10,
    fontSize:30,
}
})