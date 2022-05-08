import { View, Animated, StyleSheet, Dimensions } from 'react-native'
import React, {useRef, useEffect} from 'react'

const colors = ['#796fe2','#b75741','#82b379','#1e458a'];

const CurrentPageIndicator = ({scrollX}) => {

    const { width: windowWidth } = Dimensions.get('window');
    
  return (
    <View style={styles.indicatorContainer}>
        {Array(4).fill().map((_, index) => {
            const width = scrollX.interpolate({
                inputRange: [
                    windowWidth * (index - 1),
                    windowWidth * index,
                    windowWidth * (index + 1)
                ],
                outputRange: [8, 16, 8],
                extrapolate: "clamp"
            });

            const backgroundColor = scrollX.interpolate({
                inputRange:[0, windowWidth, windowWidth*2, windowWidth*3],
                outputRange: ['#796fe2','#b75741','#82b379','#1e458a'],
            })

            return (
                <Animated.View
                    key={index}
                    style={[styles.normalDot, { width, backgroundColor }]}
                />
            );
        })}
  </View>
  )
}

export default CurrentPageIndicator;

const styles = StyleSheet.create({
    normalDot: {
        height: 8,
        width: 8,
        borderRadius: 4,
        backgroundColor: "silver",
        marginHorizontal: 4
      },
      indicatorContainer: {
        // just sitting a width in order to be able to center it with position absolute
        width:1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        position:'absolute',
        bottom:50,
        left:(Dimensions.get('window').width/2)-(1/2)
      }
})