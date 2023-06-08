import { ActivityIndicator, FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import UserItem from './UserItem'
import API from '../config/API'

const userData=[{"createdAt":"2023-06-06T08:57:32.950Z","name":"NEW ssss","avatar":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/62.jpg","birth":"2005-07-17T16:09:27.339Z","isActive":true,"id":"2"},{"createdAt":"2023-06-06T02:03:06.501Z","name":"Blake Prohaska","avatar":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1021.jpg","birth":"1967-03-09T08:20:42.200Z","isActive":false,"id":"3"},{"createdAt":"2023-06-06T05:39:18.001Z","name":"Mr. Bernadette Oberbrunner","avatar":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/135.jpg","birth":"1994-01-31T10:08:51.571Z","isActive":false,"id":"4"},{"createdAt":"2023-06-06T06:03:11.508Z","name":"New User","avatar":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1248.jpg","birth":"2000-03-26T10:45:25.295Z","isActive":false,"id":"5"},{"createdAt":"2023-06-06T15:11:01.106Z","name":"Test","avatar":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/898.jpg","birth":"1944-12-04T04:06:14.027Z","isActive":true,"id":"6"}]

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
  const [search, setSearch] = useState(null)


  useEffect(() => {
    setLoading(true)
    API.get('/users')
      .then(response => { setUsers(response.data) })
      .catch(error => { console.log(error) })
      .finally(() => { setLoading(false) })
  }, [])

  const emptyComp = () => loading
    ? <ActivityIndicator size='large' color='red' /> :
    <View style={styles.emptyContainer}>
      <Text >Empty Data!</Text>
    </View>

  const headerComp = () => <TextInput
    value={search}
    onChangeText={(text: string) => setSearch(text)}
    placeholder='Search ...' style={{ borderWidth: 1, padding: 10, fontSize: 12 }} />

  return (
    <View style={styles.container}>
      <Text>User {search}</Text>
      <FlatList
        data=
        {userData.filter((user) => user.name?.toLowerCase().includes(search?.toLowerCase()))}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6'
  },
  emptyContainer: {
    padding:10,
    alignItems: 'center',
    justifyContent: 'center'
  }
})