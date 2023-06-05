//craeted by  tsrnfs snippet 
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SectionComp from './src/components/SectionComp'
import FlexComp from './src/components/FlexComp';


const App = (props: Props) => {
  //JS CODE

  const containerStyle = { backgroundColor: 'orange', padding: 10, marginTop: 20 }
  return (
    //JSX CODE
    <View style={styles.container}>
      {/* <SectionComp name="Tommy12" age={32}/>
     <SectionComp  age="12"/>
     <SectionComp name="Tommy24"/>
     <SectionComp name="Tommy25" age="42" isActive={false}/> */}

      <View style={styles.cardContainer}>
        <Text>Card 1</Text>
      </View>

      <FlexComp />

    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFEB5B',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    padding: 10,
    borderWidth: 2,
  }
});


// created by rnfes snippet
/*import { View, Text } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

export default App*/


// const test = (name)=> name;


