import { View, Image, StyleSheet, Text, Dimensions, TouchableOpacity, Animated } from 'react-native'
import React, {useRef, useState} from 'react'
import MarterialIcons from 'react-native-vector-icons/MaterialIcons';

const DATA = [
    {
    title:'Study in One Place',
    brief:'In here you can study all your subjects with your friends and from your favourable lecturers.',
    img:'learn'
    },
    {
    title:'Share',
    brief:'You can share your thoughts with everyone you want in The community.',
    img:'share'
    },
    {
    title:'Study With Friends',
    brief:'You can choose your study partner/s in order to study together and encourage each other',
    img:'study_together'
    },
    {
    title:'Graduate With the highest scores',
    brief:'After studying, solving large amounts of questions, and stirring your curisity you (inshallah) will score the highest scores',
    img:'graduate'
    },
]

const MARGIN = Dimensions.get('screen').width / 2
const WelcomePage = () => {

    const containerAnim = useRef(new Animated.Value(MARGIN*3)).current;
    const [currentViewMargin, setCurrentViewMargin] = useState(MARGIN*3);

    const nextView = () => {
        if(currentViewMargin > -MARGIN*3) {
            Animated.timing(containerAnim, {
                toValue:currentViewMargin-2*MARGIN,
                duration: 1000,
                useNativeDriver: true,
            }).start()
            setCurrentViewMargin(currentViewMargin-2*MARGIN)
        }
    }
    const previousView = () => {
        if(currentViewMargin < MARGIN*3) {
            Animated.timing(containerAnim, {
                toValue:currentViewMargin+2*MARGIN,
                duration: 1000,
                useNativeDriver: true,
            }).start()
            setCurrentViewMargin(currentViewMargin+2*MARGIN)
        }
    }

  return (
    <View style={{flex:1,backgroundColor:'white'}}>
        <Animated.View style={[styles.container, {transform:[{translateX:containerAnim}]}]}>

            <View style={styles.page}>
            <Image 
                source={require('../../assets/WelcomePage/learn.jpg')}
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
                source={require('../../assets/WelcomePage/share.jpg')}
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
                source={require('../../assets/WelcomePage/study_together.jpg')}
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
                source={require('../../assets/WelcomePage/graduate.jpg')}
                style={[styles.img,{height:300}]}
            />
            <Text style={[styles.title,{color: '#1e458a'}]}>
                Graduate With the highest scores
            </Text>
            <Text style={[styles.brief, {color:'#142443'}]}>
                After studying, solving large amounts of questions, and stirring your curisity you (inshallah) will score the highest scores
            </Text>
            </View>

        </Animated.View>

        <TouchableOpacity style={styles.previousBtn} activeOpacity={.7} onPress={previousView}>
            <MarterialIcons name='arrow-back-ios' color='white' size={30} style={{marginLeft:7}}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextBtn} activeOpacity={.7} onPress={nextView}>
            <MarterialIcons name='arrow-forward-ios' color='white' size={30} style={{marginLeft:2}}/>
        </TouchableOpacity>
    </View>
  )
}

export default WelcomePage;

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
    },
    page: {
        height:'100%',
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    img:{
        height:400,
        width:'100%'
    },
    title: {
        fontSize: 40,
    },
    brief: {
        fontSize:20,
        marginHorizontal:10,
        marginTop:5
    },
    nextBtn: {
        height:60,
        width:60,
        borderRadius:50,
        backgroundColor:'black',
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        bottom:30,
        right:30
    },
    previousBtn: {
        height:60,
        width:60,
        borderRadius:50,
        backgroundColor:'black',
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        bottom:30,
        left:30
    }
})