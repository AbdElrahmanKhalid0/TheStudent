import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Animated, TouchableWithoutFeedback, Image, Keyboard } from 'react-native'
import React, {useState,useRef,useEffect} from 'react'
import Input from './components/Input';
import UploadImage from './components/UploadImage';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SignUp = ({setBackBtnSignUpFnc, welcomeAnim, style, hideOther, semiComeOther, containerAnim, setWelcomeWithJoin}) => {

    useEffect(() => {
        setBackBtnSignUpFnc(() => () => {
            goOut();
            setIn(false)
        })
    }, [])

    const phoneInput = useRef(null);
    const emailInput = useRef(null);

    const MARGIN = Dimensions.get('window').width/2;

    const STARTANIMCONSTANTS = {
        container: -MARGIN*.2,
        form: -MARGIN*2,
        title:MARGIN*.35,
        text:0,
    }
    const FINISHANIMCONSTANTS = {
        container: MARGIN*.75,
        form: 0,
        title:0,
        text:MARGIN,
    }

    const formAnim = useRef(new Animated.Value(STARTANIMCONSTANTS.form)).current;
    const titleAnim = useRef(new Animated.Value(STARTANIMCONSTANTS.title)).current;
    const textAnim = useRef(new Animated.Value(STARTANIMCONSTANTS.text)).current;
    const textOpacityAnim = useRef(new Animated.Value(1)).current;

    const [isIn, setIn] = useState(false);

    const [personalImage, setPersonalImage] = useState();
    const [collegeCardImage, setCollegeCardImage] = useState();
    
    const goOut = () => {
        Animated.parallel([
            Animated.timing(containerAnim, {
                toValue: STARTANIMCONSTANTS.container,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.timing(formAnim, {
                toValue: STARTANIMCONSTANTS.form,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.timing(titleAnim, {
                toValue: STARTANIMCONSTANTS.title,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.timing(textAnim, {
                toValue: STARTANIMCONSTANTS.text,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.timing(textOpacityAnim, {
                toValue: 1,
                duration: 2000,
                useNativeDriver: true,
            }),
            Animated.timing(welcomeAnim, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true,
            }),
        ]).start()
        Keyboard.dismiss();
        semiComeOther()
    }

    const comeIn = () => {
        Animated.parallel([
            Animated.timing(containerAnim, {
                toValue: FINISHANIMCONSTANTS.container,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.timing(formAnim, {
                toValue: FINISHANIMCONSTANTS.form,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.timing(titleAnim, {
                toValue:FINISHANIMCONSTANTS.title,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.timing(textAnim, {
                toValue: FINISHANIMCONSTANTS.text,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.timing(textOpacityAnim, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
            }),
            Animated.timing(welcomeAnim, {
                toValue: MARGIN*2,
                duration: 1000,
                useNativeDriver: true,
            }),
        ]).start()
        hideOther()
    }
    
    
  return (
    //   <View style={[{width:Dimensions.get('screen').width *.75,zIndex:-10},style]}>
        <Animated.View style={[{position:'relative'}, {transform:[{translateX:containerAnim}]}]}>
            <TouchableWithoutFeedback onPress={() => {
                if (!isIn) {
                    comeIn();
                    setWelcomeWithJoin(false);
                } else {
                    Keyboard.dismiss()
                }
                setIn(!isIn);
            }}>
                <View style={styles.signUp}>
                    
                    <Animated.Text style={[styles.containerHeader,{transform:[{translateX:titleAnim}]}]}>Sign Up</Animated.Text>

                    <Animated.View style={[styles.textContainer, {opacity:textOpacityAnim,transform:[{translateX:textAnim}]}]}>
                        <Text style={styles.text}>
                            New here?
                        </Text>
                        <Text style={styles.text}>
                            Don't worry just sign up to gain access to this amzing app
                        </Text>
                    </Animated.View>

                    <Animated.View style={[styles.signInForm, {transform:[{translateX:formAnim}]}]}>

                        <Input label={'Name'} inputProperties={{
                            autoCorrect:false,
                            autoComplete:'name',
                            returnKeyType:'next',
                            textContentType:'name',
                            onSubmitEditing:() => {emailInput.current.focus()}
                        }} mainColor='#007aff' />

                        <Input label={'E-mail'} inputProperties={{
                            autoCorrect:false,
                            autoComplete:'email',
                            autoCapitalize:false,
                            returnKeyType:'next',
                            textContentType:'emailAddress',
                            onSubmitEditing:() => {phoneInput.current.focus()}
                        }} fieldRef={emailInput}
                        mainColor='#007aff'/>

                        <Input label={'Phone Number'} inputProperties={{
                            autoCorrect:false,
                            autoComplete:'tel',
                            autoCapitalize:false,
                            returnKeyType:'next',
                            textContentType:'telephoneNumber',
                            keyboardType:'phone-pad',
                            onSubmitEditing:() => {console.log('submitted')}
                        }} fieldRef={phoneInput}
                        labelStyles={{width:105}}
                        mainColor='#007aff'/>

                        <View style={styles.imageInputContainer}>
                            <UploadImage text='Personal Image' setImage={setPersonalImage} image={personalImage}/>
                            <UploadImage text='College Card Image' setImage={setCollegeCardImage} image={collegeCardImage}/>
                        </View>

                        <TouchableOpacity style={styles.submitBtn}>
                            <AntDesign name='arrowright' color='#2bc0ff' size={30} />
                        </TouchableOpacity>

                    </Animated.View>
                </View>
            </TouchableWithoutFeedback>
        </Animated.View>
    // </View>
  )
}

export default SignUp;

const styles = StyleSheet.create({
    signUp: {
        height:440,
        width:Dimensions.get('screen').width *.75,
        backgroundColor: '#007aff',
        borderRadius:20,
        marginTop:20,
        alignItems:'center',
        justifyContent:'center',
        padding:10,
    },
    containerHeader: {
        color:'white',
        fontSize: 32
    },
    signInForm: {
        marginTop: 10,
        alignItems:'center'
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
        textAlign:'right',
    },
    textContainer: {
        width:100,
        marginVertical:5,
        alignSelf:'flex-end',
        position:'absolute',
        top:70,
        right:30,
    },
    imageInputContainer: {
        width:Dimensions.get('screen').width *.63,
        flexDirection:'row',
        marginVertical:10,
        justifyContent:'space-between',
    }
})