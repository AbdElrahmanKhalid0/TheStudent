import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Animated } from 'react-native'
import React, {useState,useRef,useEffect} from 'react'
import Input from './Input';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SignIn = ({backBtnAnim, setBackBtnSignInFnc}) => {

    useEffect(() => {
        setBackBtnSignInFnc(() => goOut)
    }, [])

    const [passwordShown, setPasswordShown] = useState(false)
    const passwordInput = useRef(null);

    const MARGIN = Dimensions.get('window').width/2;

    const containerAnim = useRef(new Animated.Value(0)).current;

    const formAnim = useRef(new Animated.Value(0)).current;
    const titleAnim = useRef(new Animated.Value(0)).current;
    
    const textAnim = useRef(new Animated.Value(-MARGIN)).current;

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
            Animated.timing(backBtnAnim, {
                toValue: MARGIN*1.5,
                duration: 1000,
                useNativeDriver: true,
            }),
        ]).start()
        setTimeout(() => {
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
                Animated.timing(backBtnAnim, {
                    toValue: 0,
                    duration: 1000,
                    useNativeDriver: true,
                }),
            ]).start()
        }, 3000)
    }

    
    
  return (
    <Animated.View style={[{position:'relative'}, {transform:[{translateX:containerAnim}]}]}>
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
            <Input label={'E-mail'} inputProperties={{
                autoCorrect:false,
                autoComplete:'email',
                autoCapitalize:false,
                returnKeyType:'next',
                textContentType:'emailAddress',
                onSubmitEditing:() => {passwordInput.current.focus()}
            }}/>
            <Input label={'Password'} inputProperties={{
                autoCorrect:false,
                autoComplete:'password-new',
                autoCapitalize:false,
                returnKeyType:'go',
                textContentType:'newPassword',
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
            }/>
            <TouchableOpacity style={{alignSelf:'flex-end',marginTop:5,marginRight:5}}>
                <Text style={{color:'white'}}>Forgot password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.submitBtn} onPress={() => {goOut()}}>
                <AntDesign name='arrowright' color='#2bc0ff' size={30} />
            </TouchableOpacity>
        </Animated.View>
      </View>
    </Animated.View>
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