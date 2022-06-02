import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, {useRef, useEffect, useState} from 'react'

const DayProgress = ({activeDay, index, setActiveDay, day, duration, maxDuration}) => {
    useEffect(() => {
        setInfoVisible(activeDay === index);
    },[activeDay])

    const [infoVisible, setInfoVisible] = useState(false)

    const durationHrs = Math.floor(duration/60) > 0 ? Math.floor(duration/60) + "hr" : '';
    const durationMins =  duration == 0 ? "0min" : duration % 60 != 0 ? (duration % 60 + "min") : '';
    const durationTxt = durationHrs ? (durationHrs + " " + durationMins) : durationMins;

  return (
    <View style={styles.container}>
        <TouchableOpacity style={{height:"100%",justifyContent:'flex-end'}} onPress={() => {
            setActiveDay(index)
        }}>
            <View style={styles.barContainer}>
                <View style={[styles.bar,{backgroundColor: infoVisible ? "#337d5c" : "#cccaca", height:115*duration/maxDuration}]}/>
            </View>
            <View style={styles.txtContainer}><Text style={styles.txt}>{day}</Text></View>
            {infoVisible && (
                <View style={[styles.infoContainer]}>
                    <View style={styles.line}/>
                    <View style={styles.durationContainer}><Text style={styles.durationTxt}>{durationTxt}</Text></View>
                </View>
            )}
        </TouchableOpacity>
    </View>
  )
}

export default DayProgress

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'flex-end'
    },
    barContainer: {
        height:115,
        justifyContent:"flex-end"
    },
    bar: {
        height:"100%",
        width:40,
        borderRadius:15
    },
    line: {
        width:2,
        height:140,
        backgroundColor:'black',
        position:'absolute',
        top:10,
        zIndex:-1
    },
    txtContainer: {
        width:40,
        alignItems:'center',
        marginTop:5
    },
    txt: {
        fontSize:18,
        color:'#adaeb0'
    },
    durationContainer: {
        position:'absolute',
        top:-10,
        width:100,
        left:-3
    },
    durationTxt: {
        fontSize: 16
    },
    infoContainer: {
        position:"absolute",
        top:0,
        left:19,
        zIndex:-1
    }
})