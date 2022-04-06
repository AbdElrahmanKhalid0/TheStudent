import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Block = ({navigation,route}) => {
    navigation.setOptions({ headerTitle: () => (<Text style={{fontSize:20, fontWeight:'900'}}>Block {route.params.index}</Text>)})
  return (
    <View style={{padding:10}}>
      {route.params.subjects.map((subject, index) => (
        <TouchableOpacity style={styles.btn} key={index} onPress={() => navigation.navigate('Subject', subject)}>
          <Text style={{fontSize:35,fontWeight:'500'}}>{subject.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default Block;

const styles = StyleSheet.create({
    blocksContainer:{
      marginLeft:5
    },
    btn: {
      padding: 5,
    }
  })