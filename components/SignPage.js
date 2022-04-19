import { View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import SignIn from './SignIn';



const SignPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Hello!</Text>
      <SignIn />
    </View>
  )
}

export default SignPage;

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
    },
    welcome: {
        fontSize:45,
        fontWeight:'300'
    },
})