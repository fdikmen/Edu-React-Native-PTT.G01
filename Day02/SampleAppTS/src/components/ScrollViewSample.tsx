import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {}

const ScrollViewSample = (props: Props) => {
    return (
        <View>
            <ScrollView horizontal={true} >
                <Text style={styles.textStyle}>ScrollViewSample 1</Text>
                <Text style={styles.textStyle}>ScrollViewSample 2</Text>
                <Text style={styles.textStyle}>ScrollViewSample 3</Text>
                <Text style={styles.textStyle}>ScrollViewSample 4</Text>
                <Text style={styles.textStyle}>ScrollViewSample 5</Text>
                <Text style={styles.textStyle}>ScrollViewSample 6</Text>
                <Text style={styles.textStyle}>ScrollViewSample 7</Text>
                <Text style={styles.textStyle}>ScrollViewSample 8</Text>
                <Text style={styles.textStyle}>ScrollViewSample 9</Text>
                <Text style={styles.textStyle}>ScrollViewSample 10</Text>
                <Text style={styles.textStyle}>ScrollViewSample 11</Text>
                <Text style={styles.textStyle}>ScrollViewSample 12</Text>
            </ScrollView>

            <ScrollView style={{marginBottom:50}} pagingEnabled={true}>
                <Text style={styles.textStyle}>ScrollViewSample 1</Text>
                <Text style={styles.textStyle}>ScrollViewSample 2</Text>
                <Text style={styles.textStyle}>ScrollViewSample 3</Text>
                <Text style={styles.textStyle}>ScrollViewSample 4</Text>
                <Text style={styles.textStyle}>ScrollViewSample 5</Text>
                <Text style={styles.textStyle}>ScrollViewSample 6</Text>
                <Text style={styles.textStyle}>ScrollViewSample 7</Text>
                <Text style={styles.textStyle}>ScrollViewSample 8</Text>
                <Text style={styles.textStyle}>ScrollViewSample 9</Text>
                <Text style={styles.textStyle}>ScrollViewSample 10</Text>
                <Text style={styles.textStyle}>ScrollViewSample 11</Text>
                <Text style={styles.textStyle}>ScrollViewSample 12</Text>
            </ScrollView>
        </View>
    )
}

export default ScrollViewSample

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        color: 'black',
        marginBottom: 30,
        padding: 10,
        backgroundColor: 'yellow'
    }
})