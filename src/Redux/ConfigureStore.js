import React from 'react'
import { createStore } from 'redux'
import { loginUser } from '../Api/DataService';
import {reducer} from './AuthReducer';
import { initialState } from './initialState';

const getStateFromStorage=()=>{
    const authUser=loginUser()
    if(authUser){
        return authUser;
    }
    return initialState;
}

const setLocalStorage=(state)=>{
localStorage.setItem("login-user",JSON.stringify(state))
}
const configureStore = () => {
    const store = createStore(reducer,getStateFromStorage());
    store.subscribe(()=>{
        setLocalStorage(store.getState())
      })
    return store;
}
export default configureStore;
