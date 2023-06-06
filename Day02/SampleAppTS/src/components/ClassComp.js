import { Text, StyleSheet, View, Alert, Button } from 'react-native'
import React, { Component } from 'react'

export default class ClassComp extends Component {
    //CLASS FIELD --- stateful component
    // constructor , lifecycle methods, other methods, state
    constructor(props) {
        super(props)

    }
    state = {
        name: 'Tommy',
        age: 23,
        isMarried: false,
        hobbies: ['cricket', 'football', 'chess'],
        numbers: 0
    }

    changeName = () => {
        this.setState({
            name: 'Jerry'
        })
    }
    componentDidMount() { Alert.alert('ComponentDidMount') }

    componentDidUpdate(oncekiProps, oncekiState) {
        Alert.alert('ComponentDidUpdate State Numbers' + oncekiState.numbers + ' - ' + this.state.numbers)
     } 

     componentWillUnmount() { Alert.alert('ComponentWillUnmount') }

    onChangeNumber = () => {
        this.setState({
            numbers: this.state.numbers + 1
        })
    }

    render() {
        //JS FIELD
        return (
            //JSX FIELD
            <View>
                <Text>ClassComp</Text>
                <Text>{this.state.name}</Text>
                <Text>{this.state.numbers}</Text>
                <Text>Surname : {this.props.surname}</Text>
                <Button title='Change Number' onPress={this.onChangeNumber} />
            </View>
        )
    }
}

const styles = StyleSheet.create({})