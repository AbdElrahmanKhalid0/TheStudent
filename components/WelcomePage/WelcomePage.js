import { View, Image, StyleSheet, Text, Dimensions, TouchableOpacity, Animated, ScrollView } from 'react-native'
import React, {useRef, useState} from 'react'
import MarterialIcons from 'react-native-vector-icons/MaterialIcons';

const MARGIN = Dimensions.get('screen').width / 2
const WelcomePage = () => {

    const containerAnim = useRef(new Animated.Value(MARGIN*3)).current;
    const [currentViewMargin, setCurrentViewMargin] = useState(0);

    const scrollView = useRef();

    const nextView = () => {
        if(currentViewMargin < MARGIN*6) {
            setCurrentViewMargin(currentViewMargin+2*MARGIN)
        }
        scrollView.current.scrollTo({x: currentViewMargin+2*MARGIN});
    }
    const previousView = () => {
        if(currentViewMargin > 0) {
            setCurrentViewMargin(currentViewMargin-2*MARGIN)
        }
        scrollView.current.scrollTo({x: currentViewMargin-2*MARGIN});
    }

  return (
    <View style={{flex:1,backgroundColor:'white'}}>
        <ScrollView 
            style={{flex:1}}
            horizontal={true}
            ref={scrollView}
            showsHorizontalScrollIndicator={false}
            onScrollEndDrag={({nativeEvent}) => {
                const factor = ((nativeEvent.contentOffset.x-currentViewMargin)/(2*MARGIN)).toString();
                const scrollToRatio = parseFloat("0"+factor.slice(factor.indexOf(".")));

                if (factor > 0) {
                    // scroll right
                    if (scrollToRatio > .3 && currentViewMargin < MARGIN*6) {
                        scrollView.current.scrollTo({x:currentViewMargin+2*MARGIN});
                        setCurrentViewMargin(currentViewMargin+2*MARGIN);
                    } else {
                        scrollView.current.scrollTo({x:currentViewMargin});
                    }
                } else if (factor < 0) {
                    // scroll left
                    if (scrollToRatio > .3 && currentViewMargin > 0) {
                        scrollView.current.scrollTo({x:currentViewMargin-2*MARGIN});
                        setCurrentViewMargin(currentViewMargin-2*MARGIN);
                    } else {
                        scrollView.current.scrollTo({x:currentViewMargin});
                    }
                    
                }
            }}
        >

            <View style={styles.container}>

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

            </View>
        </ScrollView>

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