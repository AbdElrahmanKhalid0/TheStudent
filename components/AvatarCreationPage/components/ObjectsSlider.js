import { View, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React, {useState,useEffect} from 'react'
import UpperSlider from './UpperSlider'
import {IP} from '../../../utils/constants';

const ObjectsSlider = ({setCurrentHair,setCurrentEyes,setCurrentBrows,setCurrentNose,setCurrentLips}) => {
  useEffect(() => {
    fetch(`http://${IP}:5000/avatars/TypicalGuy`)
      .then(res => res.json())
      .then(res => {
        setAvatar(res)
      })
  },[])

  const [currentBar, setCurrentBar] = useState("Hair");
  const [avatar, setAvatar] = useState();
  return (
    <View style={styles.container}>
      <UpperSlider currentBar={currentBar} setCurrentBar={setCurrentBar}/>
      <ScrollView horizontal style={styles.pickupContainer}>
        {avatar && avatar[currentBar.toLowerCase()].map((object, index) => (
          <TouchableOpacity key={index} onPress={() => {
            switch (currentBar) {
              case "Hair":
                setCurrentHair(object)
                break;
              case "Eyes":
                setCurrentEyes(object)
                break;
              case "Brows":
                setCurrentBrows(object)
                break;
              case "Nose":
                setCurrentNose(object)
                break;
              case "Lips":
                setCurrentLips(object)
                break;
            }
          }}>
            <Image source={{uri:`http://${IP}:5000/avatars/TypicalGuy/${currentBar}/${object}`}} style={[styles.pickupImg,styles[currentBar]]} resizeMode={'contain'}/>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}

export default ObjectsSlider;

const styles = StyleSheet.create({
    container: {
        flex:1,
        width:"100%"
    },
    pickupContainer: {
      marginTop:30
    },
    pickupImg: {
      height:100,
      width:100,
      marginHorizontal:2
    }
})