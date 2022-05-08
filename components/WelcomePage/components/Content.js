import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
import React from 'react'

const MARGIN = Dimensions.get('screen').width / 2
const Content = () => {
  return (
    <View style={styles.container}>

        <View style={styles.page}>
            <Image 
                source={require('../../../assets/WelcomePage/learn.jpg')}
                style={styles.img}
            />
            <Text style={[styles.title,{color: '#796fe2'}]}>
                Learn
            </Text>
            <Text style={[styles.brief, {color:'#3d3c6f'}]}>
                In here you can study all your subjects with your friends and from your favourable lecturers.
            </Text>
        </View>

        <View style={styles.page}>
            <Image 
                source={require('../../../assets/WelcomePage/share.jpg')}
                style={[styles.img,{marginRight:MARGIN/8}]}
            />
            <Text style={[styles.title,{color: '#b75741'}]}>
                Share
            </Text>
            <Text style={[styles.brief, {color:'#4a231b'}]}>
                You can share your thoughts with everyone you want in The community.
            </Text>
        </View>


        <View style={styles.page}>
            <Image 
                source={require('../../../assets/WelcomePage/study_together.jpg')}
                style={[styles.img,{height:300}]}
            />
            <Text style={[styles.title,{color: '#82b379'}]}>
                Study With Friends
            </Text>
            <Text style={[styles.brief, {color:'#2c3d29'}]}>
                You can choose your study partner/s in order to study together and encourage each other.
            </Text>
        </View>

        <View style={styles.page}>
            <Image 
                source={require('../../../assets/WelcomePage/graduate.jpg')}
                style={[styles.img,{height:300}]}
            />
            <Text style={[styles.title,{color: '#1e458a'}]}>
                Graduate With the highest scores
            </Text>
            <Text style={[styles.brief, {color:'#142443'}]}>
                After studying, solving large amounts of questions, and stirring your curisity you (inshallah) will score the highest scores
            </Text>
        </View>

    </View>
  )
}

export default Content;

const styles = StyleSheet.create({
    container: {
        height:"100%",
        width:"100%",
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
    },
    page: {
        height:'100%',
        width:Dimensions.get('screen').width,
        justifyContent:'center',
        alignItems:'center'
    },
    img:{
        height:400,
        width:Dimensions.get('screen').width
    },
    title: {
        fontSize: 40,
    },
    brief: {
        fontSize:20,
        marginHorizontal:10,
        marginTop:5
    },
})