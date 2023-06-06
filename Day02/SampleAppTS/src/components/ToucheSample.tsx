import { Alert, Image, StyleSheet, Text, TouchableHighlight, TouchableNativeFeedback, TouchableOpacity,TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'

type Props = {}

const ToucheSample = (props: Props) => {
    return (
        <View style={mystyles.container}>
            <Text>Touches Sample</Text>
            <TouchableOpacity>
                <Image source={require('../assets/cat.png')} style={{ width: 100, height: 100 }} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Alert.alert('TouchableOpacity Clicked!')}>
                <Text style={mystyles.btnStyle}>Click Me</Text>
            </TouchableOpacity>

            <TouchableHighlight onPress={() => Alert.alert('TouchableHighlight Clicked!')}>
                <Text style={mystyles.btnStyle}>Click Me</Text>
            </TouchableHighlight>

            <TouchableWithoutFeedback onPress={() => Alert.alert('TouchableWithoutFeedback Clicked!')}>
                <Text style={mystyles.btnStyle}>Click Me</Text>
            </TouchableWithoutFeedback>


        </View>
    )
}

export default ToucheSample

const mystyles = StyleSheet.create({
    container: {
        borderWidth: 2,
        padding: 10,
        marginTop: 30,
        // flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnStyle: {
        backgroundColor: 'red',
        color: 'white',
        padding: 10,
        borderRadius: 5,
        margin: 10
    }
})
