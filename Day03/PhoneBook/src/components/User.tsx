import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
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
  birth:string
}

const User = (props: Props) => {
  const [users, setUsers] = useState<User[]>([])
  const [loading,setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    API.get('/users')
      .then(response => { setUsers(response.data) })
      .catch(error => { console.log(error) })
      .finally(() => { setLoading(false) })
  }, [users])
  
  return (
    <View>
      <Text>User</Text>
      {
        loading ? <ActivityIndicator size='large' 
        color='red'/> : 
        users.map((user: any) => {
          return <UserItem key={user.id} user={user}/>
        }
      )
      }
    </View>
  )
}

export default User

const styles = StyleSheet.create({})