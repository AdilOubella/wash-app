
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {View, Text} from 'react-native'
import { ORDERS, SERVICES, SETTINGS } from '../../constants/routeNames'
import Settings from '../../screens/Settings'
import Services from '../../screens/Services'
import Orders from '../../screens/Orders'




const HomeNavigator = () => {

    const HomeStack = createStackNavigator()
    return (
        <HomeStack.Navigator initialRouteName={SETTINGS}>
            <HomeStack.Screen name={SETTINGS} component={Settings}/>
            <HomeStack.Screen name={SERVICES} component={Services}/>
            <HomeStack.Screen name={ORDERS} component={Orders}/>
        </HomeStack.Navigator>
    )
}

export default HomeNavigator
