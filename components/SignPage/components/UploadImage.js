import { View, TouchableOpacity, StyleSheet, Text, Modal, Alert, Keyboard } from 'react-native'
import React, {useState} from 'react'
import Entypo from 'react-native-vector-icons/Entypo';
import * as ImagePicker from 'expo-image-picker';

const UploadImage = ({text, setImage, image}) => {

    const [modalVisible, setModalVisible] = useState(false)

    const pickCameraImage = async () => {
        const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

        if(!permissionResult.granted) {
            Alert.alert("You 've denied to give the application access to camera")
        }

        let result = await ImagePicker.launchCameraAsync ({
            mediaTypes:ImagePicker.MediaTypeOptions.All,
            allowsEditing:true,
            aspect: [4,3],
            quality:1,
        })

        if (!result.cancelled) {
            setImage(result.uri)
            setModalVisible(false)
        }
    }

    const pickStudioImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync ({
            mediaTypes:ImagePicker.MediaTypeOptions.All,
            allowsEditing:true,
            aspect: [4,3],
            quality:1,
        })

        if (!result.cancelled) {
            setImage(result.uri)
            setModalVisible(false)
        }
    }

  return (
      <View>
          <TouchableOpacity style={styles.container} onPress={() => {
              setModalVisible(true)
              Keyboard.dismiss();
            }}>
            <Text>{text}</Text>
            {image && <Entypo name='check' color='black' size={12} style={{position:'absolute',right:0,bottom:0,margin:2}}/>}
          </TouchableOpacity>

          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {setModalVisible(!modalVisible)}}
          >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <TouchableOpacity onPress={() => {setModalVisible(!modalVisible)}} style={styles.exitBtn}>
                        <Entypo name='cross' color='black' size={25}/>
                    </TouchableOpacity>
                    <View style={styles.btnsContainer}>
                        <TouchableOpacity style={{margin:10}} onPress={pickStudioImage}>
                            <Text style={styles.btnText}>Studio</Text>
                        </TouchableOpacity>
                        <Text style={{fontSize:25,fontWeight:'200'}}>|</Text>
                        <TouchableOpacity style={{margin:10}} onPress={pickCameraImage}>
                            <Text style={styles.btnText}>Camera</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
      </View>
  )
}

export default UploadImage;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height:50,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal: 5,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 25,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      exitBtn: {
          position:'absolute',
          left:0,
          margin:5
      },
      btnsContainer: {
          width:'100%',
          flexDirection:'row',
          alignItems:'center'
      },
      btnText: {
          fontSize: 18,
          color: '#007aff'
      }
})