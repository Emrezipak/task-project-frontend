import { currentUser } from '../Api/DataService';
import { initialState } from './initialState';
export const reducer = (state ={...initialState}, action) => {
    if (action.type === "Login_Success") {
        return {
            ...action.payload,
            isLogin: true
        }
    }
    else if (action.type === "Logout_Success") {
        localStorage.removeItem("user")
        return initialState;
    }

    return state;
}