import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import FormScreen from '../screens/FormScreen';
import ProfileScreen from '../screens/ProfileScreen';

type Props = {}
const Tab = createBottomTabNavigator();

const TabNavigation = (props: Props) => {
    return (
        <Tab.Navigator
            screenOptions={
                ({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconSymbol;
                        if (route.name === 'Home') {
                            iconSymbol = '♓'
                        } else if (route.name === 'Profile') {
                            iconSymbol = '♋'
                        } else if (route.name === 'Form') {
                            iconSymbol = '♊'
                        }
                         return <Text style={{color: focused ? 'blue' : 'black',fontSize:30}}>{iconSymbol}</Text>
                    }
                })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Form" component={FormScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    )
}

export default TabNavigation

const styles = StyleSheet.create({})