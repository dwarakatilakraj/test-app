import Constants from "./Constants.js"
import { getTaskData } from "./ProjectActions.js"
const initState ={
    token:null,
    userId:null,
    selectedDate:null,
    selectedTime:10,
    selectedMessage:"",
    taskData:null,
    editData:false,
    editTaskData:{},
    date:null,
    loading:false,
    errorMessage:null
}


const ProjectReducer = (state = initState, action) =>{
switch(action.type){
    case Constants.GET_USER_DATA_SUCCESS:
        return Object.assign({}, state,{
            token:action.token
        })
        case Constants.GET_USER_ID_SUCCESS:
        return Object.assign({}, state,{
            userId:action.id
        })
        case Constants.SELECTED_DATE:
        return Object.assign({}, state,{
            selectedDate:action.date,
            date:action.dateValue
        })
         case Constants.SELECTED_TIME:
        return Object.assign({}, state,{
            selectedTime:action.time
        })
         case Constants.SELECTED_MESSAGE:
        return Object.assign({}, state,{
            selectedMessage:action.message
        })
        case Constants.GET_TASK_DATA:
        return Object.assign({}, state,{
            loading:true
        })
        case Constants.GET_TASK_DATA_SUCCESS:
            return Object.assign({}, state,{
                taskData:action.data,
                loading: false
            })
         case Constants.EDIT_DATA:
        return Object.assign({}, state,{
            editData:true,
            editTaskData:action.data
        })
        case Constants.SAVE_TASK_DATA_ERROR:
        return Object.assign({}, state,{
            errorMessage:action.error,
            loading:false
        })
        case Constants.CLOSE_BANNER:
            return Object.assign({}, state,{
                errorMessage:{},
            })
        case Constants.CLEAR_USER_DATA:
        return Object.assign({}, state,{
            selectedDate:null,
            selectedTime:null,
            selectedMessage:"",
            taskData:null,
            editData:false,
            editTaskData:{},
            date:null
        })
    default:
    return state;
}

}


export default ProjectReducer;