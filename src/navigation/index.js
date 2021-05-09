import React, {useContext} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import DrawerNavigator from './DrawerNavigator'
import { ProviderContext } from '../context/Provider'
import AuthNavigator from './AuthNavigator.js'

const AppNavigationContainer = () => {
    const {authState: {isLoggedIn}} = useContext(ProviderContext);

    
    return (
       <NavigationContainer >
          {isLoggedIn ? <DrawerNavigator/> : <AuthNavigator/>}
       </NavigationContainer>
    )
}

export default AppNavigationContainer