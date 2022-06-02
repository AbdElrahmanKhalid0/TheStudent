import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

const UpperSlider = ({currentBar, setCurrentBar}) => {
    const components = [{"emoji":"👨‍🦱","title":"Hair"},
                        {"emoji":"👀","title":"Eyes"},
                        {"emoji":"👃","title":"Nose"},
                        {"emoji":"🤨","title":"Brows"},
                        {"emoji":"👄","title":"Lips"},]

  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scrollView} showsHorizontalScrollIndicator={false}>
          {components.map((component, index) => (
            <TouchableOpacity key={index} activeOpacity={.5} style={[styles.btn, currentBar == component.title ? styles.selectedBtn : null]} onPress={() => {
                setCurrentBar(component.title)
            }}>
                <Text style={styles.btnTxt}>{component.emoji}
                {component.title}</Text>
            </TouchableOpacity>
          ))}
      </ScrollView>
    </View>
  )
}

export default UpperSlider;

const styles = StyleSheet.create({
    container: {
        height:50
    },
    btn: {
        backgroundColor: 'black',
        justifyContent:'center',
        alignItems:'center',
        width: 100,
        borderRadius:30,
        marginHorizontal:2
    },
    btnTxt: {
        color: 'white',
        fontSize: 20,
    },
    scrollView: {
        marginLeft: 10,
        marginTop:10
    },
    selectedBtn: {
        backgroundColor:'grey'
    }
})