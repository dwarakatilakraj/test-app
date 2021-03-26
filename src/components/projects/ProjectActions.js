
import Constants from "./Constants.js"
import axios from 'axios';
// import { bindActionCreators } from "../../../../../../AppData/Local/Microsoft/TypeScript/3.4.5/node_modules/redux/index.js";

export function CreateProject (project){
    return (dispatch, getState) =>{
        dispatch({type:Constants.GET_USER_INFO, project})
    }
}
export function getUserDataSuccess (token){
    return{
        type:Constants.GET_USER_DATA_SUCCESS,
        token
    }
}
export function getUserIdSuccess (id){
    return{
        type:Constants.GET_USER_ID_SUCCESS,
        id
    }
}
export function updateDate (date, dateValue){
    return{
        type:Constants.SELECTED_DATE,
        date, 
        dateValue
    }
}
export function updateTime (time){
    return{
        type:Constants.SELECTED_TIME,
        time
    }
}
export function selectedMessage (message){
    return{
        type:Constants.SELECTED_MESSAGE,
        message
    }
}
export function getTaskDataSuccess (data){
    return{
        type:Constants.GET_TASK_DATA_SUCCESS,
        data
    }
}
export function getTaskData (){
    return{
        type:Constants.GET_TASK_DATA,
    }
}
export function editData (data){
    return{
        type:Constants.EDIT_DATA,
        data
    }
}
export function clearUserData (){
    return{
        type:Constants.CLEAR_USER_DATA,
        
    }
}
export function saveTaskDataError (error){
    return{
        type:Constants.SAVE_TASK_DATA_ERROR,
        error
    }
}
export function closeBanner (value){
    return{
        type:Constants.CLOSE_BANNER,
        value
    }
}

export function getUserToken(){
    const Headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',          
      }
      const data = {
        email : 'spicebluetest2@gmail.com',
        password : '12345678'
      }
      const url = "https://stage.api.sloovi.com/login";
    return(dispatch) =>{
        axios.post(url, data,{
            headers:Headers
        })
        .then((response) =>{
            if(response.data.code === 200){
            const token = response.data.results.token;
            dispatch(getUserDataSuccess(token))
            }else if(response.data.code === 400 ){
                const error = response.data.message;
                dispatch(saveTaskDataError(error));
            }
        }).catch((error) => {
            console.log("logged Error", error.message);
        })
    }
}

export function getUserId(token){
    const Headers = {
        'Authorization': 'Bearer ' + token,
        'Accept': 'application/json',
        'Content-Type': 'application/json',          
      }
      const data = {};
      const url = "https://stage.api.sloovi.com/user";
    return(dispatch) =>{
        axios.get(url,{
            headers:Headers
        })
        .then((response) =>{
            if(response.data.code === 200){
            const id = response.data.results.id;
            dispatch(getUserIdSuccess(id))
        }else if(response.data.code === 400 ){
            const error = response.data.message;
            dispatch(saveTaskDataError(error));
        }
        })
        .catch((error) => {
            console.log("logged Error", error.message);
        })
    }
}

export function getTaskList(token){
    const Headers = {
                'Authorization': 'Bearer ' + token,
                'Accept': 'application/json',
                'Content-Type': 'application/json',          
              }
      const data = {};
      const url = "https://stage.api.sloovi.com/task/lead_04412ba1d622466cab1f0ad941fcf303";
    return(dispatch) =>{
        dispatch(getTaskData())
        axios.get(url,{
            headers:Headers
        })
        .then((response) =>{
            console.log("sadlkjflsdjf", response.data.code)
            if(response.data.code === 200){
              
            const data = response.data.results;
            dispatch(getTaskDataSuccess(data))
            }else if(response.data.code === 400 ){
                const error = response.data.message;
                dispatch(getTaskData(error));
            }
        })
        .catch((error) => {
            console.log("logged Error", error.message);
        })
    }
}

export function saveTask(info, token){
    const Headers = {
                'Authorization': 'Bearer ' + token,
                'Accept': 'application/json',
                'Content-Type': 'application/json',          
              }
    const data={...info}
      const url = "https://stage.api.sloovi.com/task/lead_04412ba1d622466cab1f0ad941fcf303";
    return(dispatch) =>{
        
        axios.post(url, data,{
            headers:Headers
        })
        .then((response) =>{
            console.log("sjdhflkjsh", response.data.code);
            if(response.data.code === 201){
            const responseValue = response.results;
            dispatch(getTaskList(token))

        }else if(response.data.code === 400 ){
            const error = response.data.message;
            dispatch(saveTaskDataError(error));
        }
        })
        .catch((error) => {
            console.log("logged Error", error.message);
        })
    }
}

export function updateTask(info, token, id){
    const Headers = {

                'Authorization': 'Bearer ' + token,
                'Accept': 'application/json',
                'Content-Type': 'application/json',          
              }
    const data={...info}
      const url = "https://stage.api.sloovi.com/task/lead_04412ba1d622466cab1f0ad941fcf303/"+id;
    return(dispatch) =>{
        
        axios.put(url, data,{
            headers:Headers
        })
        .then((response) =>{
            if(response.data.code === 202){
            const responseValue = response.results;
            dispatch(getTaskList(token))
        }else if(response.data.code === 400 ){
            const error = response.data.message;
            dispatch(saveTaskDataError(error));
        }
        })
        .catch((error) => {
            console.log("logged Error", error.message);
        })
    }
}

export function deleteTask(id, token){
    const Headers = {
                'Authorization': 'Bearer ' + token,
                'Accept': 'application/json',
                'Content-Type': 'application/json',          
              }
    // const data={...info}
      const url = "https://stage.api.sloovi.com/task/lead_04412ba1d622466cab1f0ad941fcf303/"+id;
    return(dispatch) =>{
        axios.delete(url,{
            headers:Headers
        })
        .then((response) =>{
            if(response.data.code === 204){
            dispatch(getTaskList(token))
        }else if(response.data.code === 400 ){
            const error = response.data.message;
            dispatch(saveTaskDataError(error));
        }
        })
        .catch((error) => {
            console.log("logged Error", error.message);
        })
    }
}