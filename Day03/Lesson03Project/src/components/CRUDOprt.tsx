import { ActivityIndicator, Button, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'

type Props = {
}

const CRUDOprt = (props: Props) => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const [name, setName] = useState('')
  const apiUrl = 'https://647f231bc246f166da9026e4.mockapi.io'
  const getUsers = async () => {
    /*const response = await fetch('https://647f231bc246f166da9026e4.mockapi.io/users')
    const data = await response.json()
    setUsers(data)*/
    setLoading(true)
    await axios.get(apiUrl + '/users')
      .then(response => { setUsers(response.data) })
      .catch(error => { setError(error) })
      .finally(() => { setLoading(false) })
  }

  const addUser = async () => {
    await axios.post(apiUrl + '/users', { name })
      .then(response => { setUsers([...users, response.data]) })
      .catch(error => { setError(error) })
      .finally(() => { setLoading(false) })
  }

  const updateUser = async (id: number) => {
    await axios.put(`${apiUrl}/users/${id}`, { name })
      .then(response => { getUsers() })
      .catch(error => { setError(error) })
      .finally(() => { setLoading(false) })
  }
  const deleteUser = async (id: number) => {
    setLoading(true)
    await axios.delete(apiUrl + '/users/' + id)
      .then(response => { getUsers() })
      .catch(error => { setError(error) })
      .finally(() => { setLoading(false) })
  }



  return (
    <SafeAreaView style={styles.container}>
      <Text>CRUD Oprt</Text>

      {
        loading ? <ActivityIndicator size="large" color="red" /> :
          error ? <Text>Error!</Text> :
            <View>
              {
                users.map((user: any, index: number) => (
                  <Text key={index}>{user.id}.{user.name}</Text>
                ))
              }
            </View>
      }
      <TouchableOpacity onPress={getUsers}>
        <Text>Get Users</Text>
      </TouchableOpacity>
      <TextInput placeholder="Enter your name" style={{ borderWidth: 1, padding: 10 }}
        onChangeText={(text) => setName(text)}
      />
      <Button title='Save To DB' onPress={addUser} />
      <Button title='Update To DB' onPress={() => updateUser(1)} />
      <Button title='Delete User From DB' onPress={() => deleteUser(1)} />

    </SafeAreaView>
  )
}

export default CRUDOprt

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

})