import { View, StyleSheet, TextInput, Dimensions } from 'react-native'
import React, {useRef} from 'react'

const CodeInput = () => {
    const refs = Array(6).fill().map(() => useRef());
  return (
    <View style={styles.container}>
        {Array(6).fill().map((_, index) => 
            <TextInput 
                key={index}
                style={styles.input}
                keyboardType='number-pad'
                ref={refs[index]}
                maxLength={1}
                onChangeText={(text) => {
                    if(text != '') {
                        if(refs[index+1]) {
                            refs[index+1].current.focus();
                        }
                    }
                }}
                onKeyPress={({nativeEvent}) => {
                    if(nativeEvent.key === 'Backspace' && index > 0) {
                        refs[index-1].current.focus();
                    }
                }}
                selectTextOnFocus={true}
            />
        )}
    </View>
  )
}

export default CodeInput;

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        marginTop:10,
    },
    input: {
        height:45,
        width:45,
        marginHorizontal:1,
        backgroundColor: '#a84703',
        borderRadius:10,
        color: 'white',
        paddingHorizontal:14,
        fontWeight:'900',
        fontSize:28,
        justifyContent:'center',
        alignItems:'center'
    },
})