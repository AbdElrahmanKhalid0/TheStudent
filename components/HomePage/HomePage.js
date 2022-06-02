import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import UpperMenu from './components/UpperMenu';

const HomePage = () => {
  return (
    <View style={styles.container}>
      <UpperMenu />
    </View>
  )
}

export default HomePage;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex:1,
        // justifyContent:"center",
        alignItems:"center"
    }
})