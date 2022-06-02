import { View, Text, StyleSheet } from 'react-native'
import React,{useState} from 'react'
import DayProgress from './DayProgress';

const Days = [{title:"Sat",duration:34},
              {title:"Sun",duration:120},
              {title:"Mon",duration:36},
              {title:"Tue",duration:9},
              {title:"Wed",duration:70},
              {title:"Thu",duration:15},
              {title:"Fri",duration:0}]

const Progress = () => {
    const [activeDay,setActiveDay] = useState()
    const [maxDuration,setMaxDuration] = useState(0)

  return (
    <View style={styles.container}>
      <Text style={styles.mainTxt}>Progress</Text>
      <View style={styles.daysContainer}>
        {Days.map((day,index) => {
            if (day.duration > maxDuration) {
                setMaxDuration(day.duration);
            }

            return (
            <DayProgress day={day.title} index={index} setActiveDay={setActiveDay} activeDay={activeDay} duration={day.duration} maxDuration={maxDuration} key={index}/>
            )})}
      </View>
    </View>
  )
}

export default Progress;

const styles = StyleSheet.create({
    mainTxt: {
        fontSize: 26,
    },
    container: {
        width:'100%',
        padding:20
    },
    daysContainer: {
        width:"97%",
        height:"50%",
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
        padding: 20,
        flexDirection:'row'
    },
})