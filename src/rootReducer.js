import authReducer from "./components/auth/authReducer"
import ProjectReducer from "./components/projects/ProjectReducer"
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    authReducer:authReducer,
    ProjectReducer:ProjectReducer
});

export default rootReducer;