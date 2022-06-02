import { View, Animated, StyleSheet, Dimensions } from 'react-native'
import React from 'react'

const CurrentPageIndicator = ({scroll, pagesNumber, bgEnabled, pageWidth, pageHeight, indicatorContainerStyles, dotsColor}) => {

    const indicator = pageWidth ? pageWidth : pageHeight
    
  return (
    <View style={[styles.indicatorContainer, {flexDirection: pageHeight ? 'column' : 'row'}, indicatorContainerStyles]}>
        {Array(pagesNumber).fill().map((_, index) => {
            const indicatorOutput = scroll.interpolate({
                inputRange: [
                    indicator * (index - 1),
                    indicator * index,
                    indicator * (index + 1)
                ],
                outputRange: [8, 16, 8],
                extrapolate: "clamp"
            });

            const backgroundColor = scroll.interpolate({
                inputRange:[0, indicator, indicator*2, indicator*3],
                outputRange: ['#796fe2','#b75741','#82b379','#1e458a'],
            })

            return (
                <Animated.View
                    key={index}
                    style={[styles.normalDot, { width: pageWidth ? indicatorOutput : 8, height: pageHeight ? indicatorOutput : 8, backgroundColor: bgEnabled ? backgroundColor : dotsColor ? dotsColor : 'black' }]}
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
        margin: 4
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