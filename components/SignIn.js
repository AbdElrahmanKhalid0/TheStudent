import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Animated, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, {useState,useRef,useEffect} from 'react'
import Input from './Input';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SignIn = ({setBackBtnSignInFnc, welcomeAnim}) => {

    useEffect(() => {
        setBackBtnSignInFnc(() => goOut)
    }, [])

    const [passwordShown, setPasswordShown] = useState(false)
    const passwordInput = useRef(null);

    const MARGIN = Dimensions.get('window').width/2;

    const containerAnim = useRef(new Animated.Value(MARGIN)).current;
    const formAnim = useRef(new Animated.Value(MARGIN*2)).current;
    const titleAnim = useRef(new Animated.Value(-MARGIN*.35)).current;
    const textAnim = useRef(new Animated.Value(0)).current;

    const [isIn, setIn] = useState(false);

    const goOut = () => {
        Animated.parallel([
            Animated.timing(containerAnim, {
                toValue: MARGIN,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.timing(formAnim, {
                toValue: MARGIN*2,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.timing(titleAnim, {
                toValue: -MARGIN*.35,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.timing(textAnim, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.timing(welcomeAnim, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true,
            }),
        ]).start()
        Keyboard.dismiss();
    }

    const comeIn = () => {
        Animated.parallel([
            Animated.timing(containerAnim, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.timing(formAnim, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.timing(titleAnim, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.timing(textAnim, {
                toValue: -MARGIN,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.timing(welcomeAnim, {
                toValue: -MARGIN*2,
                duration: 1000,
                useNativeDriver: true,
            }),
        ]).start()
    }

    
    
  return (
      <View style={{width:Dimensions.get('screen').width *.75}}>
        <Animated.View style={[{position:'relative'}, {transform:[{translateX:containerAnim}]}]}>
            <TouchableWithoutFeedback onPress={() => {
                if (!isIn) {
                    comeIn();
                } else {
                    Keyboard.dismiss();
                }
                setIn(!isIn);
            }}>
                <View style={styles.signIn}>
                    <Animated.Text style={[styles.containerHeader,{transform:[{translateX:titleAnim}]}]}>Sign In</Animated.Text>
                    <Animated.View style={[styles.textContainer, {transform:[{translateX:textAnim}]}]}>
                        <Text style={styles.text}>
                            Returning?
                        </Text>
                        <Text style={styles.text}>
                            Just Sign in to resume what you were doing
                        </Text>
                    </Animated.View>
                    <Animated.View style={[styles.signInForm, {transform:[{translateX:formAnim}]}]}>

                        <Input label={'Username'} inputProperties={{
                            autoCorrect:false,
                            autoComplete:'username',
                            autoCapitalize:false,
                            returnKeyType:'next',
                            textContentType:'username',
                            onSubmitEditing:() => {passwordInput.current.focus()}
                        }} labelStyles={{width:75}}
                        mainColor='#2bc0ff'/>

                        <Input label={'Password'} inputProperties={{
                            autoCorrect:false,
                            autoComplete:'password',
                            autoCapitalize:false,
                            returnKeyType:'go',
                            textContentType:'Password',
                            secureTextEntry:!passwordShown,
                            keyboardType:'visible-password',
                        }} labelStyles={{width:70}}
                        inputStyles={{paddingRight:40}}
                        fieldRef={passwordInput}
                        rightBtn={
                            (<View style={{
                                position:'absolute',
                                right:10,
                                }}>
                                    <TouchableOpacity onPress={() => {setPasswordShown(!passwordShown)}}>
                                        <Entypo name={passwordShown ? 'eye-with-line' : 'eye'} color={'white'} size={20}/>
                                    </TouchableOpacity>
                            </View>)
                        } mainColor='#2bc0ff'/>

                        <TouchableOpacity style={{alignSelf:'flex-end',marginTop:5,marginRight:5}}>
                            <Text style={{color:'white'}}>Forgot password?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.submitBtn}>
                            <AntDesign name='arrowright' color='#2bc0ff' size={30} />
                        </TouchableOpacity>
                    </Animated.View>
                </View>
            </TouchableWithoutFeedback>
        </Animated.View>
    </View>
  )
}

export default SignIn;

const styles = StyleSheet.create({
    signIn: {
        height:300,
        width:Dimensions.get('screen').width *.75,
        backgroundColor: '#2bc0ff',
        borderRadius:20,
        marginTop:20,
        alignItems:'center',
        padding:10
    },
    containerHeader: {
        color:'white',
        fontSize: 32
    },
    signInForm: {
        marginTop: 10,
    },
    submitBtn: {
        width:50,
        height: 50,
        borderRadius:50,
        backgroundColor:'white',
        alignSelf:'center',
        marginTop:15,
        justifyContent:'center',
        alignItems:'center'
    },
    text: {
        color:'white',
        fontSize:15,
        marginVertical:5,
    },
    textContainer: {
        width:100,
        marginVertical:5,
        alignSelf:'flex-start',
        position:'absolute',
        top:70,
        marginLeft:35,
    }
})