import { View, Text, Button } from 'react-native'
import React,{useState} from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(7)
    const [counter2, yyyyy] = useState(5)
    // let counter = 0
    const increase = () => {
        // counter=counter+1
        setCounter(counter+1)
        yyyyy(17)
        console.log('counter=>',counter,'counter2=>', counter2)
    }
    const decrease = () => {
        // counter--
        setCounter(counter-1)
        console.log(counter)
    }
    return (
        <View>
            <Text>Counter</Text>
            <Button title="+" onPress={increase}/>
            <Text>Counter {counter} Counter2 {counter2}</Text>
            <Button title="-" onPress={decrease}/>
            <Button title="- for Counter2" onPress={()=>yyyyy(counter2-1)}/>
        </View>
    )
}

export default Counter