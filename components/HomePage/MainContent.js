import React from 'react'
import HomePage from './HomePage'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomePagePostLargeView from './components/HomePagePostLargeView/HomePagePostLargeView';

const ProminentPostsStack = createNativeStackNavigator();

const MainContent = () => {
  return (
    <ProminentPostsStack.Navigator screenOptions={{headerShown:false}}>
      <ProminentPostsStack.Screen name='MainContent' component={HomePage}/>
      <ProminentPostsStack.Screen name='ProminentPost' component={HomePagePostLargeView}/>
    </ProminentPostsStack.Navigator>
  )
}

export default MainContent