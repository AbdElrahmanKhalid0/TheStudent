import { View, StyleSheet, Text, Dimensions, TouchableOpacity, Animated, ScrollView } from 'react-native'
import React, {useRef, useState} from 'react'
import MarterialIcons from 'react-native-vector-icons/MaterialIcons';
import Content from './components/Content';
import CurrentPageIndicator from './components/CurrentPageIndicator';

const MARGIN = Dimensions.get('screen').width / 2
const WelcomePage = () => {

    const scrollX = useRef(new Animated.Value(0)).current;

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
          horizontal
          ref={scrollView}
          pagingEnabled
          onMomentumScrollEnd={({nativeEvent}) => {
            setCurrentViewMargin(nativeEvent.contentOffset.x)
            }}
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX
                }
              }
            }
          ], {
              useNativeDriver:false
          })}
          scrollEventThrottle={1}
        >
          <Content />
        </ScrollView>

          <CurrentPageIndicator scrollX={scrollX}/>

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
    },
})