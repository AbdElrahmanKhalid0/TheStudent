import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const CourseCard = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.8}>
        <View style={{flexDirection:'row'}}>
          <Image source={require("../../../assets/HomePage/block106.png")} resizeMode='contain' style={styles.courseIcon}/>
          <Text style={styles.courseTitle}>Principles of Diseases and the Pharmacological Basis of Therapeutics Course</Text>
        </View>
        <View style={{flexDirection:'row', marginTop: 10}}>
          <Text style={{color: '#fc384e', fontSize:18}}>37 Lecture</Text><Text style={{fontSize:18, marginHorizontal:5}}>|</Text><Text style={{color: '#2591f7', fontSize:18}}>13 Lesson</Text>
        </View>
        <View style={styles.progressBar}>
          <View style={styles.lecturesProgressBar}/>
          <View style={styles.lessonsProgressBar}/>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default CourseCard

const styles = StyleSheet.create({
    container: {
        width:"97%",
        height:200,
        alignSelf:'center',
        backgroundColor:'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.05,
        shadowRadius: 5,
        borderRadius:20,
        padding: 20
    },
    courseTitle: {
      fontSize:20
    },
    courseIcon: {
      height:60,
      width:60,
      marginRight:13
    },
    progressBar: {
      marginTop:15,
      width:'97%',
      height:30,
      alignSelf:'center',
      backgroundColor:'#fcfcfc',
      borderRadius:20,
      justifyContent:'center',
      padding:3,
      flexDirection:'row',
    },
    lecturesProgressBar: {
      height:30,
      width:'40%',
      backgroundColor:'#fc384e',
      borderRadius:20,
      position:'absolute',
      left:0
    },
    lessonsProgressBar: {
      height:30,
      width:'25%',
      backgroundColor:'#2591f7',
      borderRadius:20,
      position:'absolute',
      right:0
    }
})