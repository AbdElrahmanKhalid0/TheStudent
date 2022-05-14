import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const BasicComponent = () => {
  return (
    <View style={styles.container}>
      <Text>BasicComponent</Text>
    </View>
  )
}

export default BasicComponent;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})