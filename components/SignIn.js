import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React, {useState,useRef,useEffect} from 'react'
import Input from './Input';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SignIn = () => {

    const [passwordShown, setPasswordShown] = useState(false)
    const passwordInput = useRef(null);

  return (
    <View>
      <View style={styles.signIn}>
        <Text style={styles.containerHeader}>Sign In</Text>
        <View style={styles.signInForm}>
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
            <TouchableOpacity style={styles.submitBtn}>
                <AntDesign name='arrowright' color='#2bc0ff' size={30} />
            </TouchableOpacity>
        </View>
      </View>
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
    }
})