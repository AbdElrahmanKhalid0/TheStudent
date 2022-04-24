import { View, Text, StyleSheet, TouchableOpacity, Animated, Dimensions, KeyboardAvoidingView} from 'react-native';
import React, {useRef, useState} from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import JoinWithCode from './JoinWithCode';
import AntDesign from 'react-native-vector-icons/AntDesign';


// #FIXME: when clicking on the left side of the two components (sign in,
//  join with code) on android it doesn't work
const SignPage = () => {

    const MARGIN = Dimensions.get('window').width/2;

    const [backBtnSignInFnc, setBackBtnSignInFnc] = useState();
    const [backBtnSignUpFnc, setBackBtnSignUpFnc] = useState();
    const [backBtnJoinFnc, setBackBtnJoinFnc] = useState();

    const [welcomeWithJoin, setWelcomeWithJoin] = useState(false);
    
    const signUpContainerAnim = useRef(new Animated.Value(-MARGIN*.2)).current;
    const signInContainerAnim = useRef(new Animated.Value(MARGIN*.2)).current;
    const joinWithCodeContainerAnim = useRef(new Animated.ValueXY({x:MARGIN*.2,y:0})).current;

    const signUpHideFnc = () => {
        Animated.timing(signUpContainerAnim, {
            toValue: -MARGIN,
            duration: 1000,
            useNativeDriver: true,
        }).start()
    }
    const signInHideFnc = () => {
        Animated.timing(signInContainerAnim, {
            toValue: MARGIN,
            duration: 1000,
            useNativeDriver: true,
        }).start()
    }
    const signUpSemiComeFnc = () => {
        Animated.timing(signUpContainerAnim, {
            toValue: -MARGIN*.2,
            duration: 1000,
            useNativeDriver: true,
        }).start()
    }
    const signInSemiComeFnc = () => {
        Animated.timing(signInContainerAnim, {
            toValue: MARGIN*.2,
            duration: 1000,
            useNativeDriver: true,
        }).start()
    }
    const joinWithCodeHideFnc = () => {
        Animated.timing(joinWithCodeContainerAnim, {
            toValue: {x:MARGIN,y:0},
            duration: 1000,
            useNativeDriver: true,
        }).start()
    }
    const joinWithCodeSemiComeFnc = () => {
        Animated.timing(joinWithCodeContainerAnim, {
            toValue: {x:MARGIN*.2,y:0},
            duration: 1000,
            useNativeDriver: true,
        }).start()
    }

    const welcomeAnim = useRef(new Animated.Value(0)).current;

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
        <Animated.View style={[styles.backBtnsContainer,{transform:[{translateX:welcomeAnim}]}]}>
            <View style={styles.backBtnContainer}>
                <TouchableOpacity style={[welcomeWithJoin?styles.joinBackBtn:styles.signUpBackBtn,styles.backBtn]} onPress={welcomeWithJoin?backBtnJoinFnc:backBtnSignUpFnc}>
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
            <SignUp 
                setBackBtnSignUpFnc={setBackBtnSignUpFnc}
                welcomeAnim={welcomeAnim}
                hideOther={() => {
                    signInHideFnc();
                    joinWithCodeHideFnc();
                }}
                semiComeOther={() => {
                    signInSemiComeFnc();
                    joinWithCodeSemiComeFnc();
                }}
                containerAnim={signUpContainerAnim}
                setWelcomeWithJoin={setWelcomeWithJoin}
            />  
            <View style={{zIndex:-100}}>
                <SignIn 
                    setBackBtnSignInFnc={setBackBtnSignInFnc}
                    welcomeAnim={welcomeAnim}
                    hideOther={() => {
                        signUpHideFnc();
                        joinWithCodeHideFnc();
                    }}
                    semiComeOther={() => {
                        signUpSemiComeFnc();
                        joinWithCodeSemiComeFnc();
                    }}
                    containerAnim={signInContainerAnim}
                />
                <JoinWithCode 
                    containerAnim={joinWithCodeContainerAnim}
                    welcomeAnim={welcomeAnim}
                    setBackBtnJoinFnc={setBackBtnJoinFnc}
                    setWelcomeWithJoin={setWelcomeWithJoin}
                    hideOther={() => {
                        signUpHideFnc();
                        signInHideFnc();
                    }}
                    semiComeOther={() => {
                        signUpSemiComeFnc();
                        signInSemiComeFnc();
                    }}
                />
            </View>
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
    joinBackBtn: {
        backgroundColor: '#E8630A',
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