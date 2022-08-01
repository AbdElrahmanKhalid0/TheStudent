import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'

const HomePagePost = ({post}) => {

    const [liked, setLiked] = useState(false)

  return (
    <View style={[styles.post]}>
        <Text style={{fontSize:20}}>{post}</Text>
        {/* {largeViewOfPostActivated && (
            <View style={styles.btns}>
              <TouchableOpacity onPress={() => {
                  setLiked(!liked)
              }}>
                <AntDesign name={liked ? 'heart' : 'hearto'} color='red' size={23}/>
              </TouchableOpacity>
              <TouchableOpacity>
                <Feather name='message-circle' color='grey' size={23}/>
              </TouchableOpacity>
            </View>
        )} */}
    </View>
  )
}

export default HomePagePost;

const styles = StyleSheet.create({
    post: {
        padding:10,
        height:90,
        justifyContent:'center'
    },
    btns: {
        marginTop:20,
        flexDirection:'row',
        justifyContent:'space-between',
        width:"20%"
    }
})