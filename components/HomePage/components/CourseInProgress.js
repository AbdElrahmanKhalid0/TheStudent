import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CourseCard from './CourseCard';

const CourseInProgress = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainTxt}>Course In Progress</Text>
      <CourseCard />
    </View>
  )
}

export default CourseInProgress;

const styles = StyleSheet.create({
    mainTxt: {
        fontSize: 26,
    },
    container: {
        marginTop:30,
        width:'100%',
        padding:20
    }
})