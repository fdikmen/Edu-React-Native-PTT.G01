import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

type Props = {
    color: string,
    backgroundColor: string,
    title: string,
    onPress: () => void
}

const CButton = ({color,backgroundColor,title="Default Button",onPress}:Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={{...styles.btnContainer,backgroundColor}}>
        <Text style={{...styles.btnTitle,color}}>{title}</Text>
    </TouchableOpacity>    )
}

export default CButton

const styles = StyleSheet.create({
    btnContainer:{
        backgroundColor:'#F1F1F1',
        paddingVertical:10,
        paddingHorizontal:20,
        borderRadius:8,
        marginVertical:10
    },
    btnTitle:{
        fontSize:16,
        fontWeight:'600',
        color:'#666',
        textAlign:'center',
        textTransform:'uppercase'
    }
})