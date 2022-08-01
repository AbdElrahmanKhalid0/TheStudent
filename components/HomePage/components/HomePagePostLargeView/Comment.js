import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'


const Comment = () => {
  return (
    <View style={styles.container}>
        <Text style={{fontSize:18}}>hola this is a comment</Text>
        <TouchableOpacity style={{marginTop:5,marginLeft:5}}>
            <AntDesign name={'hearto'} color='red' size={23}/>
        </TouchableOpacity>
        <View style={[styles.line, {height:1}]} />
    </View>
  )
}

export default Comment;

const styles = StyleSheet.create({
    container: {
        marginVertical:10,
        marginLeft:40
    },
    line: {
        width:"80%",
        height:2,
        backgroundColor:'grey',
        marginTop:20,
        alignSelf:'center'
    },
})