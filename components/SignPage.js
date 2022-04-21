import { View, Text, StyleSheet, TouchableOpacity, Animated, Dimensions, KeyboardAvoidingView} from 'react-native';
import React, {useRef, useState} from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import AntDesign from 'react-native-vector-icons/AntDesign';



const SignPage = () => {

    const MARGIN = Dimensions.get('window').width/2;

    const [backBtnSignInFnc, setBackBtnSignInFnc] = useState();
    const [backBtnSignUpFnc, setBackBtnSignUpFnc] = useState();
    

    const welcomeAnim = useRef(new Animated.Value(0)).current;

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
        <Animated.View style={[styles.backBtnsContainer,{transform:[{translateX:welcomeAnim}]}]}>
            <View style={styles.backBtnContainer}>
                <TouchableOpacity style={[styles.signUpBackBtn,styles.backBtn]} onPress={backBtnSignUpFnc}>
                    <AntDesign name='arrowleft' color='white' size={30} />
                </TouchableOpacity>
            </View>
            <View style={styles.backBtnContainer}></View>
            <View style={styles.backBtnContainer}>
                <TouchableOpacity style={[styles.signInBackBtn,styles.backBtn]} onPress={backBtnSignInFnc}>
                    <AntDesign name='arrowleft' color='white' size={30} />
                </TouchableOpacity>
            </View>
        </Animated.View>


        <Animated.View style={[styles.welcomeContainer,{transform:[{translateX:welcomeAnim}]}]}>
            <View style={styles.welcomeChildContainer}>
                <Text style={styles.welcome}>Welcome!</Text>
            </View>
            <View style={styles.welcomeChildContainer}>
                <Text style={styles.welcome}>Hello!</Text>
            </View>
            <View style={styles.welcomeChildContainer}>
                <Text style={styles.welcome}>Welcome Back!</Text>
            </View>
        </Animated.View>

        <View style={{flexDirection:'row'}}>
            <SignIn setBackBtnSignInFnc={setBackBtnSignInFnc} welcomeAnim={welcomeAnim}/>
            {/* <SignUp setBackBtnSignUpFnc={setBackBtnSignUpFnc} welcomeAnim={welcomeAnim}/>     */}
        </View>
    </KeyboardAvoidingView>
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
        width:50,
        height: 50,
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center',
        marginVertical: 15,
    },
    signInBackBtn: {
        backgroundColor: '#2bc0ff',
    },
    signUpBackBtn: {
        backgroundColor: '#2b75ff',
    },
    welcomeContainer: {
        alignItems: 'center',
        flexDirection:'row',
    },
    welcomeChildContainer: {
        width: Dimensions.get('window').width,
        alignItems:'center',
    },
    backBtnsContainer: {
        alignItems: 'center',
        flexDirection:'row',
    },
    backBtnContainer: {
        width: Dimensions.get('window').width,
        alignItems:'center',
    },
})