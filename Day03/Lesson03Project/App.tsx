import { Alert,ActivityIndicator, Button, FlatList, Platform, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import SpinnerComp from './src/components/SpinnerComp'
import axios from 'axios'
import CRUDOprt from './src/components/CRUDOprt'

type Props = {
}

type User = {
  id: number,
  name: string
}

const App = (props: Props) => {

  const [users, setUsers] = useState<User[]>([])
  useEffect(() => {
    axios.get('https://647f231bc246f166da9026e4.mockapi.io/users')
      .then(response => { setUsers(response.data) })
      .catch(error => { console.log(error) })
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Text>App</Text>
      {/* <SpinnerComp/> */}
      {/* <CRUDOprt /> */}

      <FlatList
        // data={[{id:1, name:'Ali'},{id:2, name:'Veli'},{id:3, name:'Ayşe'}]}
        // data={[]}
        data={users}
        renderItem={({ item }) => <Text style={styles.rowstyle}>{item.id}.{item.name}</Text>}
        keyExtractor={(item:User, index:number) => index.toString()}
        ItemSeparatorComponent={() => <View style={{ borderWidth: 1, borderColor: 'red' }}></View>}
        ListEmptyComponent={() => <Text>List is empty!</Text>}
        ListFooterComponent={() => <View style={{ borderTopWidth: 2, borderColor: 'blue' }}>
          <Text>List Footer</Text></View>}
        ListHeaderComponent={() => <View style={{ borderBottomWidth: 2, borderColor: 'green' }}
        ><Text>List Header</Text></View>}
        onEndReached={() => Alert.alert('End Reached')}
      />
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  rowstyle: {
    backgroundColor: 'yellow',
    padding: 10,
  }


})