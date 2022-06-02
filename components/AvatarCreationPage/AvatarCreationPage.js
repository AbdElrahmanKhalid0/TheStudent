import { View, Text, StyleSheet, Image, Dimensions  } from 'react-native'
import React, {useState,useEffect} from 'react'
import ObjectsSlider from './components/ObjectsSlider'
import {IP} from '../../utils/constants';


const AvatarCreationPage = () => {
  // TODO: Add The other characters/avatars in another page and make each one goes to this
  // page making it dynamic to each character
  
  const [currentHair, setCurrentHair] = useState("cookie.png");
  const [currentEyes, setCurrentEyes] = useState("brown.png");
  const [currentBrows, setCurrentBrows] = useState("1.png");
  const [currentNose, setCurrentNose] = useState("1.png");
  const [currentLips, setCurrentLips] = useState("1.png");

  return (
    <View style={styles.container}>
      <Image 
        source={require("../../assets/AvatarCreationPage/createYourAvatar.jpg")}
        style={styles.mainText}
      />
      <View>
        <Image 
          source={{uri:`http://${IP}:5000/avatars/TypicalGuy/hair/${currentHair}`}}
          style={styles.face}
          resizeMode={'contain'}
        />
        <Image 
          source={{uri:`http://${IP}:5000/avatars/TypicalGuy/eyes/${currentEyes}`}}
          style={styles.eye}
        />
        <Image 
          source={{uri:`http://${IP}:5000/avatars/TypicalGuy/brows/${currentBrows}`}}
          style={styles.brows}
        />
        <Image 
          source={{uri:`http://${IP}:5000/avatars/TypicalGuy/nose/${currentNose}`}}
          style={styles.nose}
        />
        <Image 
          source={{uri:`http://${IP}:5000/avatars/TypicalGuy/lips/${currentLips}`}}
          style={styles.lips}
        />
      </View>
      <ObjectsSlider setCurrentHair={setCurrentHair} setCurrentBrows={setCurrentBrows} setCurrentLips={setCurrentLips} setCurrentEyes={setCurrentEyes} setCurrentNose={setCurrentNose}/>
    </View>
  )
}

export default AvatarCreationPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex:1,
    alignItems:'center',
  },
  mainText: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width * 605 / 1220,
  },
  face: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
  },
  eye: {
    width: Dimensions.get('window').width *.5,
    height: 50,
    position:'absolute',
    left: Dimensions.get('window').width * .25,
    top: Dimensions.get('window').width *.33,
    transform: [{scale:1.1}]
  },
  brows: {
    width: Dimensions.get('window').width *.5,
    height: 50,
    position:'absolute',
    left: Dimensions.get('window').width * .24,
    top: Dimensions.get('window').width *.25,
  },
  nose: {
    width: Dimensions.get('window').width *.2,
    height: 300 * Dimensions.get('window').width *.2 / 464,
    position: 'absolute',
    left: Dimensions.get('window').width *.4,
    top: Dimensions.get('window').width *.46
  },
  lips: {
    width: Dimensions.get('window').width *.5,
    height: Dimensions.get('window').width *.5 * 500 / 604,
    position: 'absolute',
    left: Dimensions.get('window').width *.25,
    top: Dimensions.get('window').width *.43,
    transform: [{scale:.6}]
  }
})