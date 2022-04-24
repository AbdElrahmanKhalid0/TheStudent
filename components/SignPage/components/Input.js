import { View, Text, TextInput, Dimensions, StyleSheet } from 'react-native'
import React, {useEffect,useImperativeHandle, useRef} from 'react'

const Input = ({label,inputProperties,labelStyles,rightBtn,inputStyles,containerStyles,fieldRef,mainColor}) => {
  return (
    <View style={[styles.container,containerStyles]}>
        <View style={[styles.label,labelStyles,{backgroundColor:mainColor}]}>
            <Text style={{color:'white', fontSize:14}}>{label}</Text>
        </View>
      <View style={{flexDirection:'row',alignItems:'center'}}>
        <TextInput 
          style={[styles.input,inputStyles]} 
          {...inputProperties}
          ref={fieldRef}
        />
        {rightBtn}
      </View>
    </View>
  )
}

export default Input;

const styles = StyleSheet.create({
    label: {
        position:'relative',
        left:10,
        top:8,
        zIndex:3,
        width:50,
        alignItems:'center',
        borderRadius:5,
    },
    input: {
        height:45,
        width:Dimensions.get('screen').width *.6,
        borderColor:'white',
        borderWidth:2,
        borderRadius:10,
        color: 'white',
        paddingHorizontal:10,
        fontWeight:'400'
    },
    container: {
      marginVertical:5
    }
})