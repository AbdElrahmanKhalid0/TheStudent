import Home from './components/Home';
import Block from './components/Block';
import Subject from './components/Subject';
import Lecture from './components/Lecture';
import SignPage from './components/SignPage/SignPage';
import WelcomePage from './components/WelcomePage/WelcomePage';
import AvatarCreationPage from './components/AvatarCreationPage/AvatarCreationPage';
import HomePage from './components/HomePage/HomePage';
import {SafeAreaView,Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='HomePage'>
          <Stack.Screen name="Blocks" component={Home}  options={{ headerTitle: () => (<Text style={{fontSize:30, fontWeight:'900'}}>Blocks</Text>)}}/>
          <Stack.Screen name="Block" component={Block} />
          <Stack.Screen name="Subject" component={Subject} />
          <Stack.Screen name="Lecture" component={Lecture} />
          <Stack.Screen name="SignPage" component={SignPage} options={{headerShown:false}}/>
          <Stack.Screen name="WelcomePage" component={WelcomePage} options={{headerShown:false}}/>
          <Stack.Screen name="AvatarCreationPage" component={AvatarCreationPage} options={{headerShown:false}}/>
          <Stack.Screen name="HomePage" component={HomePage} options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}