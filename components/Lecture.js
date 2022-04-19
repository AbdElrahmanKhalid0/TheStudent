import { View, Text, ScrollView, Image, StyleSheet, Dimensions } from 'react-native'
import React, {useEffect, useState} from 'react'
import YoutubePlayer from "react-native-youtube-iframe";
import {IP} from '../utils/constants';



const Lecture = ({navigation, route}) => {
    useEffect(() => {
        navigation.setOptions({ headerTitle: () => (<Text style={{fontSize:20, fontWeight:'900'}}>Lecture {route.params.lectureNum}</Text>)})
        fetch(`http://${IP}:5000/${route.params.subject}/${route.params.lectureNum}`)
            .then(res => res.json())
            .then(res => {
                setImgs(res["images"])
                setYoutubeUrl(res["youtubeUrl"])
            })
            .catch(err => console.log(err))
    }, [])
    const [imgs, setImgs] = useState();
    const [youtubeUrl, setYoutubeUrl] = useState();
    const [playing, setPlaying] = useState(false);


    return (
        <View style={{flex:1,alignItems:'center'}}>
            <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor:'white', padding:0}}>
                {imgs && Array(imgs[1]-imgs[0]+1).fill().map((_, index) => (
                    <Image 
                        key={index}
                        style={styles.img}
                        source={{
                            uri:`http://${IP}:5000/img/${imgs[0]+index}`,
                            cache:'force-cache'
                        }}
                    />
                ) )}
            </ScrollView>
            {youtubeUrl && 
            <View style={{bottom:-10,right:5,position:'absolute'}}>
                <YoutubePlayer
                    height={300}
                    width={300}
                    play={playing}
                    videoId={youtubeUrl}
                />
            </View>}
        </View>
    )
}

export default Lecture;

const styles = StyleSheet.create({
    img:{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * 2339 / 1654,
    }
})