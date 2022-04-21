import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Animated, TouchableWithoutFeedback, Image, Keyboard } from 'react-native'
import React, {useState,useRef,useEffect} from 'react'
import Input from './Input';
import UploadImage from './UploadImage';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const SignUp = ({setBackBtnSignUpFnc, welcomeAnim}) => {

    useEffect(() => {
        setBackBtnSignUpFnc(() => goOut)
    }, [])

    const phoneInput = useRef(null);
    const emailInput = useRef(null);

    const MARGIN = Dimensions.get('window').width/2;

    const containerAnim = useRef(new Animated.Value(-MARGIN)).current;
    const formAnim = useRef(new Animated.Value(-MARGIN*2)).current;
    const titleAnim = useRef(new Animated.Value(MARGIN*.35)).current;
    const textAnim = useRef(new Animated.Value(0)).current;

    const [isIn, setIn] = useState(false);

    const [personalImage, setPersonalImage] = useState();
    const [collegeCardImage, setCollegeCardImage] = useState();
    
    const goOut = () => {
        Animated.parallel([
            Animated.timing(containerAnim, {
                toValue: -MARGIN,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.timing(formAnim, {
                toValue: -MARGIN*2,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.timing(titleAnim, {
                toValue: MARGIN*.35,
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
                toValue:0,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.timing(textAnim, {
                toValue: MARGIN,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.timing(welcomeAnim, {
                toValue: MARGIN*2,
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
                    Keyboard.dismiss()
                }
                setIn(!isIn);
            }}>
                <View style={styles.signUp}>
                    
                    <Animated.Text style={[styles.containerHeader,{transform:[{translateX:titleAnim}]}]}>Sign Up</Animated.Text>

                    <Animated.View style={[styles.textContainer, {transform:[{translateX:textAnim}]}]}>
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
    </View>
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