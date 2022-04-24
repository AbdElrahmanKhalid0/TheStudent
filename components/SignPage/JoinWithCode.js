import { View, Text, StyleSheet, Dimensions, Animated, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native'
import React, {useState, useRef, useEffect} from 'react'
import CodeInput from './components/CodeInput'
import AntDesign from 'react-native-vector-icons/AntDesign';

const JoinWithCode = ({style, containerAnim, welcomeAnim, setBackBtnJoinFnc, setWelcomeWithJoin, hideOther, semiComeOther}) => {

    useEffect(() => {
        setBackBtnJoinFnc(() => () => {
            goOut();
            setIn(false)
        })
        // comeIn();
    }, [])

    const [isIn, setIn] = useState(false);

    const MARGIN = Dimensions.get('window').width/2;

    const STARTANIMCONSTANTS = {
        container: MARGIN*.2,
        form: MARGIN*2,
        title:-MARGIN*.35,
        text:0,
    }
    const FINISHANIMCONSTANTS = {
        container: -MARGIN*.75,
        form: 0,
        title:0,
        text:-MARGIN,
    }

    const titleAnim = useRef(new Animated.Value(STARTANIMCONSTANTS.title)).current;
    const textAnim = useRef(new Animated.Value(STARTANIMCONSTANTS.text)).current;
    const formAnim = useRef(new Animated.Value(STARTANIMCONSTANTS.form)).current;
    const textOpacityAnim = useRef(new Animated.Value(1)).current;

    const comeIn = () => {
        Animated.parallel([
            Animated.timing(containerAnim, {
                toValue: {x:FINISHANIMCONSTANTS.container,y:-300},
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.timing(titleAnim, {
                toValue: FINISHANIMCONSTANTS.title,
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
            Animated.timing(formAnim, {
                toValue: FINISHANIMCONSTANTS.form,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.timing(welcomeAnim, {
                toValue: MARGIN*2,
                duration: 1000,
                useNativeDriver: true,
            }),
        ]).start()
        hideOther();
    }

    const goOut = () => {
        Animated.parallel([
            Animated.timing(containerAnim, {
                toValue: {x:STARTANIMCONSTANTS.container,y:0},
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
            Animated.timing(formAnim, {
                toValue: STARTANIMCONSTANTS.form,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.timing(welcomeAnim, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true,
            }),
        ]).start()
        semiComeOther();
    }


  return (
    <View style={[{width:Dimensions.get('screen').width *.75},style]}>
        <Animated.View style={[{position:'relative'}, {transform:[{translateX:containerAnim.x},{translateY:containerAnim.y}]}]}>
            <TouchableWithoutFeedback onPress={() => {
                if (!isIn) {
                    comeIn();
                    setWelcomeWithJoin(true);
                } else {
                    Keyboard.dismiss();
                }
                setIn(!isIn);
            }}>
                <View style={styles.container}>
                    <Animated.Text style={[styles.containerHeader, {transform:[{translateX:titleAnim}]}]}>Join With Code</Animated.Text>
                    <Animated.View style={[styles.textContainer, {opacity:textOpacityAnim,transform:[{translateX:textAnim}]}]}>
                            <Text style={styles.text}>
                                Already have been Approved?
                            </Text>
                            <Text style={styles.text}>
                                Enter your code in order to join
                            </Text>
                    </Animated.View>

                    <Animated.View style={[styles.form, {transform:[{translateX:formAnim}]}]}>
                        <CodeInput />

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

export default JoinWithCode;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#E8630A",
        width: Dimensions.get('screen').width *.75,
        height: 160, 
        marginTop:10,
        borderRadius:20,
        padding: 10,
        alignItems:'center',
    },
    containerHeader: {
        color:'white',
        fontSize: 18,
        fontWeight:'700'
    },
    text: {
        color:'white',
        fontSize:14,
        marginVertical:2,
        textAlign:'left',
    },
    textContainer: {
        width:120,
        marginVertical:5,
        flex:1,
        alignSelf:'flex-start',
        position:'absolute',
        top:40,
        left:20
    },
    form: {
        flex:1,
        alignContent:'center',
        justifyContent:'space-between'
    },
    submitBtn: {
        width:50,
        height: 50,
        borderRadius:50,
        backgroundColor:'white',
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
    },
})