import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import UpperMenu from './components/UpperMenu';
import CourseInProgress from './components/CourseInProgress';
import ProminentPosts from './components/ProminentPosts';
import Progress from './components/Progress';

const HomePage = () => {
  return (
    <View style={styles.container}>
      <UpperMenu />
      <CourseInProgress />
      <ProminentPosts />
      <Progress />
      {/* TODO: bottom Navigation Bar */}
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