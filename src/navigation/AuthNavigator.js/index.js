import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import { SIGN_IN, SIGN_UP } from '../../constants/routeNames';
import SignIn from '../../screens/SignIn';
import SignUp from '../../screens/SignUp';

const AuthNavigator = () => {

    const  AuthStack = createStackNavigator();
    return (
        <AuthStack.Navigator initialRouteName={SIGN_IN}   screenOptions={{headerShown:false}}>
            <AuthStack.Screen name={SIGN_IN} component={SignIn} options={{ title: 'My home' }}/> 
            <AuthStack.Screen name={SIGN_UP} component={SignUp}/>
        </AuthStack.Navigator>
    )
}

export default AuthNavigator
