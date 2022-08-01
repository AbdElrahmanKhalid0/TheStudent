import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React, {useState} from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import Comment from './Comment'

// TODO: Need to adjust the appearance of the post and the comments

const HomePagePostLargeView = ({route}) => {

    const [liked, setLiked] = useState(false)

  return (
    <View style={styles.container}>
        <Text style={styles.postText}>{route.params.post}</Text>
        <View style={{width:"100%",flexDirection:'row',marginLeft:10}}><Text style={{fontSize:18}}>by  </Text><TouchableOpacity><Text style={{fontSize:20}}>PostOwner</Text></TouchableOpacity></View>
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
        <View style={styles.line} />
        <ScrollView>
            <View style={styles.commentsContainer}>
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
            </View>
        </ScrollView>
    </View>
  )
}

export default HomePagePostLargeView;

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'white',
        padding:15
    },
    postText: {
        fontSize:28,
        marginBottom:10
    },
    btns: {
        marginTop:20,
        marginLeft:10,
        flexDirection:'row',
        justifyContent:'space-between',
        width:"15%"
    },
    line: {
        width:"90%",
        height:2,
        backgroundColor:'grey',
        marginTop:20,
        alignSelf:'center'
    },
    commentsContainer: {

    },
})