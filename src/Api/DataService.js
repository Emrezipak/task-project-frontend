import React from "react";

export const authHeader=()=>{
    const user=JSON.parse(localStorage.getItem("user"))
    if(user && user.token){
        return {Authorization:"Bearer "+user.token}
    }
    return {}
}

export const setLocalStorage=(data)=>{
        if(data.token){
            localStorage.setItem("user",JSON.stringify(data))
        }
        return data
}

export const currentUser=()=>{
    return JSON.parse(localStorage.getItem("user"))
}
export const loginUser=()=>{
    return JSON.parse(localStorage.getItem("login-user"))
}
export const deleteUserFromLocalStorage=()=>{
    localStorage.removeItem("user")
}