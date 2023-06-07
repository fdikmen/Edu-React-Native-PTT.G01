import { ActivityIndicator, FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import UserItem from './UserItem'
import API from '../config/API'

type Props = {}

type User = {
  id: number,
  name: string,
  createdAt: string,
  avatar: string,
  isActive: boolean,
  birth: string
}

const User = (props: Props) => {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState<any>(null)


  useEffect(() => {
    setLoading(true)
    API.get('/users')
      .then(response => { setUsers(response.data) })
      .catch(error => { console.log(error) })
      .finally(() => { setLoading(false) })
  }, [users])

  const emptyComp = () => loading
    ? <ActivityIndicator size='large' color='red' /> :
    <Text>Empty Data!</Text>

  const headerComp = () => <TextInput
    // value={search}
    onChangeText={(text: string) => setSearch(text)}
    placeholder='Search ...' style={{ borderWidth: 1, padding: 10, fontSize: 12 }} />

  return (
    <View>
      <Text>User {search}</Text>
      <FlatList
        data=
        {users.filter((user) => user.name?.toLowerCase().includes(search?.toLowerCase()))}
        renderItem={({ item }) => <UserItem user={item} />}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={emptyComp}
        ListFooterComponent={() => <Text>Footer</Text>}
        ListHeaderComponent={headerComp}
      />
    </View>
  )
}

export default User

const styles = StyleSheet.create({})