import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import TabNavigation from './TabNavigation';
type Props = {}

const Stack = createNativeStackNavigator();
const StackNavigation = (props: Props) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Main" component={TabNavigation} />
        </Stack.Navigator>
    )
}

export default StackNavigation

const styles = StyleSheet.create({})