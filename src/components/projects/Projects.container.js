import {bindActionCreators} from 'redux';
import {connect} from "react-redux";
import CreatePRoject from "./CreatePRoject";
import * as Actions from "./ProjectActions";

const mapStateToProps = ({ProjectReducer}) =>{
    return{
        token : ProjectReducer.token,
        userId: ProjectReducer.userId,
        selectedDate: ProjectReducer.selectedDate,
        selectedTime: ProjectReducer.selectedTime,
        selectedMessage: ProjectReducer.selectedMessage,
        taskData: ProjectReducer.taskData,
        editData: ProjectReducer.editData,
        editTaskData: ProjectReducer.editTaskData,
        date: ProjectReducer.date,
        loading: ProjectReducer.loading,
        errorMessage: ProjectReducer.errorMessage
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
    actions: bindActionCreators(Actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePRoject);