import { View, Text, StyleSheet, ScrollView, Animated, TouchableOpacity } from 'react-native'
import React, {useRef} from 'react'
import CurrentPageIndicator from '../../WelcomePage/components/CurrentPageIndicator'

const posts = ["Hey, There is a change in the exams date please be aware of it",
               "I have a real problem with pathology, I can't understand a ....",
               "Unpopular Opinion: Pharmacology is amazing",
               "This can't be more complicated"
]

const PostsContainer = () => {
    const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
        <View>
            <ScrollView
                style={styles.postsScrollView}
                pagingEnabled
                showsVerticalScrollIndicator={false}
                onScroll={({nativeEvent}) => {
                    scrollY.setValue(nativeEvent.contentOffset.y);
                }}
                scrollEventThrottle={1}
                >
                    {posts.map((post, index) => (
                        <TouchableOpacity activeOpacity={0.5}>
                            <View style={[styles.post]}>
                                <Text style={{fontSize:20}}>{post}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
            </ScrollView>
            <CurrentPageIndicator scroll={scrollY} pagesNumber={4} pageHeight={90} indicatorContainerStyles={styles.indicatorContainerStyles} dotsColor='#d6d6d6'/>
        </View>
    </View>
  )
}

export default PostsContainer;

const styles = StyleSheet.create({
    container: {
        width:"97%",
        height:130,
        alignSelf:'center',
        backgroundColor:'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.05,
        shadowRadius: 5,
        borderRadius:20,
        padding: 20,
    },
    postsScrollView: {
        height:90,
        width:'95%',
    },
    post: {
        padding:10,
        height:90,
        justifyContent:'center'
    },
    indicatorContainerStyles: {
        top:'50%',
        right:0,
        width:'65%'
    }
})