import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import UpperMenu from './components/UpperMenu';
import CourseInProgress from './components/CourseInProgress';
import ProminentPosts from './components/ProminentPosts';
import Progress from './components/Progress';

const HomePage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <UpperMenu />
      <CourseInProgress />
      <ProminentPosts navigation={navigation}/>
      <Progress />
    </View>
  )
}

export default HomePage;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex:1,
        alignItems:"center"
    }
})