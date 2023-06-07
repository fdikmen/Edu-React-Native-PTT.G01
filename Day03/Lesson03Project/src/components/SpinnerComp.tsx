import { ActivityIndicator, Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

type Props = {
}

const SpinnerComp = (props: Props) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])


  return (
    <SafeAreaView style={styles.container}>
      <Text>Spinner Comp</Text>

      <ActivityIndicator size="large" color="red"
        animating={loading}
        hidesWhenStopped={false}
      />
      {
        !loading && <Text>Loaded!</Text>
      }
    </SafeAreaView>
  )
}

export default SpinnerComp

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        backgroundColor: 'yellow',
      },
      android: {
        backgroundColor: 'blue',
      }
    })
  },

})