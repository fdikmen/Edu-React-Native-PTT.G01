import { StyleSheet, Text, View,Button,Alert } from 'react-native'
import React, { useState,useEffect } from 'react'

const FuncComp = (props) => {
  const [name, setName] = useState('Tommy')
  const [age, setAge] = useState(23)
  const [isMarried, setIsMarried] = useState(false)
  const [hobbies, setHobbies] = useState(['cricket', 'football', 'chess'])
  const [numbers, setNumbers] = useState(0)

  const changeName = () => {
    setName('Jerry')
  }
  const onChangeNumber = () => {
    setNumbers(numbers + 1)
  }
//componentDidMount
  useEffect(() => {    Alert.alert('ComponentDidMount')  }, [])

//componentDidMount + componentDidUpdate
  useEffect(() => {    Alert.alert('ComponentDidUpdate')  }, [name,numbers])

//componentDidMount + componentWillUnmount
  useEffect(() => {    return () => {Alert.alert('ComponentWillUnmount') }  }, [])

  //componentDidMount + componentDidUpdate + componentWillUnmount
    useEffect(() => {    
      console.log('ComponentDidMount') 
      console.log('componentDidUpdate') 
      return () => {console.log('ComponentWillUnmount') }  }, [age])

  //functional component - stateless component
  //JS FIELD
  return (
    //JSX FIELD
    <View>
      <Text>FuncComp</Text>
      <Text>{name}</Text>
      <Text>{numbers}</Text>
      <Text>Surname : {props.surname}</Text>
      <Button title='Change Number' onPress={onChangeNumber} />
    </View>
  )
}

export default FuncComp

const styles = StyleSheet.create({})