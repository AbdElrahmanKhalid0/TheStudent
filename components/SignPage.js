import { View, Text, StyleSheet, TouchableOpacity, Animated} from 'react-native';
import React, {useRef, useState} from 'react';
import SignIn from './SignIn';
import AntDesign from 'react-native-vector-icons/AntDesign';



const SignPage = () => {

    const backBtnAnim = useRef(new Animated.Value(0)).current;
    const [backBtnSignInFnc, setBackBtnSignInFnc] = useState();

  return (
    <View style={styles.container}>
        <Animated.View style={{transform:[{translateX:backBtnAnim}]}}>
            <TouchableOpacity style={styles.backBtn} onPress={backBtnSignInFnc}>
                <AntDesign name='arrowleft' color='white' size={30} />
            </TouchableOpacity>
        </Animated.View>
      <Text style={styles.welcome}>Hello!</Text>
      <SignIn backBtnAnim={backBtnAnim} setBackBtnSignInFnc={setBackBtnSignInFnc}/>
    </View>
  )
}

export default SignPage;

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
    },
    welcome: {
        fontSize:45,
        fontWeight:'300',
        marginVertical:20,
    },
    backBtn: {
        backgroundColor: '#2bc0ff',
        width:50,
        height: 50,
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center',
        marginVertical: 15,
    }
})