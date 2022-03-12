import axios from 'axios';
import { authHeader } from './DataService';
export const signUp=(body) =>{
    return axios.post('api/auth/register',body)
}
export const login=(email,password)=>{
    return axios.post('api/auth/login',{
        email,
        password
    }
    )
}
export const getAllUser=()=>{
    return axios.get("api/users/getAll",{headers:authHeader()})
}
export const addTask=(task)=>{
    return axios.post("api/tasks/addTask",task,{headers:authHeader()})
}
export const getUserByName=(name)=>{
    return axios.get("api/users/getByName",{
        params:{
            name
        },
        headers:authHeader()
    },)
}
export const getAllTask=()=>{
    return axios.get("api/tasks/getAllTask",{headers:authHeader()})
}

export const deleteTask=(id)=>{
    return axios.delete("api/tasks/deleteTask/"+id,{headers:authHeader()})
}
export const getTaskByUserEmail=(email)=>{
    return axios.get("api/tasks/getTaskByUser",{
        params:{
            email
        },
        headers:authHeader()
    })
}
export const getTaskByUs=(email)=>{
    return axios.get("api/tasks/getTaskByUser",{
        params:{
            email
        },
        headers:authHeader()
    })
}

