import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import React, {useState, useEffect} from 'react'
import {IP} from '../../utils/constants';


const AvatarCreationPage = () => {
  const [imgs, setImgs] = useState()

  useEffect(() => {
    fetch(`http://${IP}:5000/avatars/`)
      .then(res => res.json())
      .then(res => {
        setImgs(res.avatars)
      })
  }, [])
  
  const [currentImg, setCurrentImg] = useState();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Choose your Avatar:</Text>
      <View>
        {currentImg ? (<Image 
          source={{uri:currentImg}}
          style={styles.mainImg}
        />) : (
          <View style={[styles.imgPlaceHolder, styles.mainImg]}>
            <Text style={{color:'white'}}>please choose an avatar</Text>
          </View>
        )}
        <ScrollView horizontal style={styles.scrollList}>
          {imgs && imgs.map((img,index) => (
              <TouchableOpacity key={index} onPress={() => {
                setCurrentImg(`http://${IP}:5000/avatar/${img}`)
              }}>
                <Image source={{uri:`http://${IP}:5000/avatar/${img}`}} style={styles.img}/>
              </TouchableOpacity>
          )
          )}
        </ScrollView>
      </View>
      <TouchableOpacity style={styles.nextBtn}>
        <Text style={{color:'white', fontSize:20}}>Next</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AvatarCreationPage;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex:1,
        justifyContent:'center',
    },
    img: {
        height: 200,
        width: 200,
        borderRadius:100,
        margin:2
      },
    mainImg: {
      height: Dimensions.get('window').width-40,
      width: Dimensions.get('window').width-40,
      borderRadius:(Dimensions.get('window').width-40)/2,
      marginHorizontal:20,
      marginBottom:50
    },
    header: {
      alignSelf:'center',
      fontSize:30,
      marginBottom:50
    },
    nextBtn: {
      width:100,
      height:30,
      borderRadius:20,
      backgroundColor:'black',
      alignItems:'center',
      justifyContent:'center',
      alignSelf:'flex-end',
      marginRight:20,
      marginTop:40
    },
    imgPlaceHolder: {
      backgroundColor: '#8f8f8f',
      alignItems:'center',
      justifyContent:'center'
    }
})