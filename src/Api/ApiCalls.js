import axios from 'axios';
import { authHeader } from './DataService';
const url="https://task-project-backend.herokuapp.com/"
export const signUp=(body) =>{
    return axios.post(url+'api/auth/register',body)
}
export const login=(email,password)=>{
    return axios.post(url+'api/auth/login',{
        email,
        password
    }
    )
}
export const getAllUser=()=>{
    return axios.get(url+"api/users/getAll",{headers:authHeader()})
}
export const addTask=(task)=>{
    return axios.post(url+"api/tasks/addTask",task,{headers:authHeader()})
}
export const getUserByName=(name)=>{
    return axios.get(url+"api/users/getByName",{
        params:{
            name
        },
        headers:authHeader()
    },)
}
export const getAllTask=()=>{
    return axios.get(url+"api/tasks/getAllTask",{headers:authHeader()})
}

export const deleteTask=(id)=>{
    return axios.delete(url+"api/tasks/deleteTask/"+id,{headers:authHeader()})
}
export const getTaskByUserEmail=(email)=>{
    return axios.get(url+"api/tasks/getTaskByUser",{
        params:{
            email
        },
        headers:authHeader()
    })
}
export const getTaskByUs=(email)=>{
    return axios.get(url+"api/tasks/getTaskByUser",{
        params:{
            email
        },
        headers:authHeader()
    })
}

