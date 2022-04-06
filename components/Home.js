import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Data from '../DummyData';

const Home = ({navigation}) => {
  return (
        <View style={{flex:1,padding:10}}>
          <View style={styles.blockContainer}>
            {Data.blocks.map((block,index) => (
              <TouchableOpacity style={styles.btn} key={index} onPress={() => navigation.navigate('Block', block)}>
                <Text style={{fontSize:35,fontWeight:'500'}}>{block.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
  )
}

export default Home;

const styles = StyleSheet.create({
  blocksContainer:{
    marginLeft:5
  },
  btn: {
    padding: 5,
  }
})