import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomePage from './HomePage/HomePage'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator()

const MainView = () => {
  return (
    <NavigationContainer independent={true}>
        <Tab.Navigator screenOptions={{
            headerShown:false,
            tabBarActiveTintColor:'#ffd21d',
            tabBarInActiveTintColor:'grey'
        }}>
            <Tab.Screen name ="Home" component={HomePage} options={{
                tabBarIcon:({color,size}) => (<FontAwesome name='home' size={size} color={color}/>),
            }}/>
            <Tab.Screen name ="Community" component={HomePage} options={{
                tabBarIcon:({color,size}) => (<FontAwesome5 name='user-friends' size={size} color={color}/>),
            }}/>
            <Tab.Screen name ="Study Partner" component={HomePage} options={{
                tabBarIcon:({color,size}) => (<MaterialCommunityIcons name='transit-connection-variant' size={size} color={color}/>),
            }}/>
            <Tab.Screen name ="War" component={HomePage} options={{
                tabBarIcon:({color,size}) => (<MaterialCommunityIcons name='sword-cross' size={size} color={color}/>),
            }}/>
            <Tab.Screen name ="Settings" component={HomePage} options={{
                tabBarIcon:({color,size}) => (<Ionicons name='settings' size={size} color={color}/>),
            }}/>
        </Tab.Navigator>
    </NavigationContainer>
  )
}

export default MainView;