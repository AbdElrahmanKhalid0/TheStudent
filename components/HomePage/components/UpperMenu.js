import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const UpperMenu = () => {
  return (
    <View style={styles.container}>
      <View style={{flex:1}}>
        <View style={styles.avatarContainer}>
            <Image source={require("../../../assets/HomePage/TypicalMan.png")} style={styles.avatar} resizeMode={'contain'}/>
        </View>
      </View>
      <View style={{flex:2}}>
          <Text style={styles.welcomeTxt}>Hi, Abdelrahman <Text style={{color:'blue'}}>!</Text></Text>
      </View>
      <View style={{flex:1}}>
        <TouchableOpacity style={{alignSelf:'flex-end', marginRight:5}}>
            <FontAwesome name='bell-o' size={28} color='black'/>
            <View style={styles.notificationsIndicator}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default UpperMenu;

const styles = StyleSheet.create({
    avatar: {
        height:60,
        width:60,
    },
    avatarContainer: {
        width:60,
        height:60,
        backgroundColor:'#ffd21d',
        borderRadius:35,
        marginRight:5,
    },
    container: {
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:20
    },
    welcomeTxt: {
        fontSize:20
    },
    notificationsIndicator: {
        height:10,
        width:10,
        borderRadius:5,
        backgroundColor:'#ffd21d',
        position:'absolute',
        top:3,
        right:3
    }
})