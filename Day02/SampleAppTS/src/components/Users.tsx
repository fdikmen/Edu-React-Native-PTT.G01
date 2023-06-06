import { ScrollView, StyleSheet, Text, View,Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import UserCard from './UserCard'
import axios from 'axios'

type Props = {}

const Users = (props: Props) => {
    const [users, setUsers] = useState([])

    const getUsersFetch = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(result => result.json())
            .then(resultJson => setUsers(resultJson))
    }

    const getUsersAxios = () => {
        axios.get('https://647f231bc246f166da9026e4.mockapi.io/users')
            .then(result => setUsers(result.data))
    }
    useEffect(() => {
        // getUsersFetch()
        getUsersAxios()
    }, [])


    const addUser = () => {
        axios.post('https://647f231bc246f166da9026e4.mockapi.io/users', { name: 'New User', isActive: false })
        .then(result => setUsers([...users, result.data]))
    }

    return (
        <View>
            <Text>Users</Text>
            <Button title='Add User' onPress={addUser} />
            <ScrollView>
                {
                    users.map((user: any) => {
                        return <UserCard userId={user.id} name={user.name}
                            isActive={user.isActive} avatar={user.avatar} />
                    }
                    )
                }
            </ScrollView>

        </View>
    )
}

export default Users

const styles = StyleSheet.create({})