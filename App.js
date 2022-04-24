import Home from './components/Home';
import Block from './components/Block';
import Subject from './components/Subject';
import Lecture from './components/Lecture';
import SignPage from './components/SignPage/SignPage';
import {SafeAreaView,Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='SignPage'>
          <Stack.Screen name="Blocks" component={Home}  options={{ headerTitle: () => (<Text style={{fontSize:30, fontWeight:'900'}}>Blocks</Text>)}}/>
          <Stack.Screen name="Block" component={Block} />
          <Stack.Screen name="Subject" component={Subject} />
          <Stack.Screen name="Lecture" component={Lecture} />
          <Stack.Screen name="SignPage" component={SignPage} options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}