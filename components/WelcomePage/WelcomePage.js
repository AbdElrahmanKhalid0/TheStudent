import { View, StyleSheet, Text, Dimensions, TouchableOpacity, Animated, ScrollView } from 'react-native'
import React, {useRef, useState} from 'react'
import MarterialIcons from 'react-native-vector-icons/MaterialIcons';
import Content from './components/Content';
import CurrentPageIndicator from './components/CurrentPageIndicator';

const MARGIN = Dimensions.get('screen').width / 2
const { width: windowWidth } = Dimensions.get('window');
const WelcomePage = () => {

    const scrollX = useRef(new Animated.Value(0)).current;
    const [scrollable, setScrollable] = useState(true)

    const [currentViewMargin, setCurrentViewMargin] = useState(0);

    const scrollView = useRef();

    const welcomeTxtMarginAnim = useRef(new Animated.Value(MARGIN)).current
    const nxtBtnAnim = useRef(new Animated.Value(1)).current

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

    const nextBtnWidth = scrollX.interpolate({
        inputRange: [
            0,
            windowWidth*3
        ],
        outputRange: [60,100],
        extrapolate: "clamp"
    })

    const backgroundColor = scrollX.interpolate({
        inputRange:[0, windowWidth, windowWidth*2, windowWidth*3],
        outputRange: ['#796fe2','#b75741','#82b379','#1e458a'],
    })

    const prevBtnOpacity = scrollX.interpolate({
        inputRange:[0, windowWidth, windowWidth*2, windowWidth*3],
        outputRange:[1,.75, .5, 0],
        extrapolate:'clamp'
    })

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
          onScroll={({nativeEvent}) => {
              scrollX.setValue(nativeEvent.contentOffset.x);
              if (scrollX._value >= windowWidth * 3) {
                  Animated.parallel([
                      Animated.spring(welcomeTxtMarginAnim, {
                          useNativeDriver:true,
                          toValue:0,
                      }),
                      Animated.timing(nxtBtnAnim, {
                          useNativeDriver:true,
                          toValue:0,
                          duration:100,
                      }),
                  ]).start()
                  setScrollable(false);
              }
          }}
          scrollEventThrottle={1}
          scrollEnabled={scrollable}
        >
          <Content />
        </ScrollView>

          <CurrentPageIndicator scrollX={scrollX}/>

        <TouchableOpacity activeOpacity={.7} onPress={previousView}>
            <Animated.View style={[styles.previousBtn, {opacity:prevBtnOpacity, backgroundColor}]}>
                <MarterialIcons name='arrow-back-ios' color='white' size={30} style={{marginLeft:7}}/>
            </Animated.View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={.7} onPress={nextView}>
            <Animated.View style={[styles.nextBtn, {width: nextBtnWidth, backgroundColor}]}>
                <Animated.View style={{marginLeft:2,opacity:nxtBtnAnim}}><MarterialIcons name='arrow-forward-ios' color='white' size={30}/></Animated.View>
                <Animated.Text style={[{color:'white', fontSize:30, position:'absolute', transform:[{translateX:welcomeTxtMarginAnim}]}]}>Start</Animated.Text>
            </Animated.View>
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