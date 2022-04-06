import { View, Text } from 'react-native'
import React from 'react'

const Subject = ({route, navigation}) => {
    navigation.setOptions({ headerTitle: () => (<Text style={{fontSize:20, fontWeight:'900'}}>{route.params.name}</Text>)})
  return (
    <View>
      <Text>{route.params.name}</Text>
    </View>
  )
}

export default Subject;