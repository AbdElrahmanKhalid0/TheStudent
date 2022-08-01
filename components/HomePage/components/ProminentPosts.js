import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import PostsContainer from './PostsContainer';

const ProminentPosts = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainTxt}>Prominent Posts</Text>
      <PostsContainer navigation={navigation}/>
    </View>
  )
}

export default ProminentPosts;

const styles = StyleSheet.create({
    mainTxt: {
        fontSize: 26,
    },
    container: {
        width:'100%',
        padding:20
    }
})