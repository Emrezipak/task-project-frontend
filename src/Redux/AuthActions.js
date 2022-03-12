export const loginSuccessAction=(data)=>{
    return{
        type:"Login_Success",
        payload:data
    }
}
export const logout=()=>{
    return{
        type:"Logout_Success",
    }
}
