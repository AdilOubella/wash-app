import { SIGN_IN, SIGN_UP } from "../../constants/routeNames";


export const authReducer = (state, {action, payload}) => {
    switch(action){
        case SIGN_IN:
            return {
                ...state,
                isLoading: false,
                isLogedIn: true,
                data: payload
            };
        case SIGN_UP: 
            return{
                ...state,
                isLoading:false,
                data: payload
            }
        default:
            return state;
    }
}


