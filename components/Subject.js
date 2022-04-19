import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

const Subject = ({route, navigation}) => {
    navigation.setOptions({ headerTitle: () => (<Text style={{fontSize:20, fontWeight:'900'}}>{route.params.name}</Text>)})
  return (
    <View>
      <ScrollView>
        {Array(route.params.lecturesNum).fill().map((_,index) => (
          <TouchableOpacity style={styles.btn} key={index} onPress={() => {navigation.navigate("Lecture", {lectureNum:index+1, subject:route.params.nick})}}>
            <Text style={{fontSize:35,fontWeight:'500'}}>Lecture {index + 1}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}

export default Subject;

const styles = StyleSheet.create({
  btn: {
    padding: 5,
  }
})