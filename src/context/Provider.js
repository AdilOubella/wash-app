import React, {createContext, useReducer} from 'react'
import authIntialState from './initialStates/authIntialState';
import {authReducer} from './reducers/authReducer'


export const ProviderContext = createContext();

const GlobalProvider = ({children}) => {

    const [authState, authDispatch] = useReducer(authReducer,authIntialState);
  
    return (
        <ProviderContext.Provider value={{authState, authDispatch}}>
            {children}
        </ProviderContext.Provider>
    )
}

export default GlobalProvider
