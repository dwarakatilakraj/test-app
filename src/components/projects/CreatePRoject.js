import React, { Component } from 'react'
import * as Actions from "./ProjectActions"
import { connect } from "react-redux"
import DatePicker from 'react-date-picker';
import moment from 'moment';
import Select from 'react-select';
import TimePicker from 'react-bootstrap-time-picker';
import _ from 'lodash';
import ShowTask from './ShowTask'
import  Spinner from 'react-bootstrap/Spinner'
import Alert from 'react-bootstrap/Alert'

// import './App.css'
// import './App.css'

export default class CreatePRoject extends Component {
    state={
        title:"",
        content:"",
        date:null
    }
    componentDidMount(){
      this.props.actions.getUserToken();
    
    }
    componentWillReceiveProps(nextProps){
     
      if(nextProps.token && (this.props.token !== nextProps.token)){
          this.props.actions.getTaskList(nextProps.token);
        this.props.actions.getUserId(nextProps.token);
      }
    }

handleChange = (e) => {
        this.setState({
            message: e.target.value})
            this.props.actions.selectedMessage(e.target.value);
    }
handleSubmit = (e) => {
  e.preventDefault();
console.log("sdkjfdlksj", this.props.selectedTime);
  const data = {
    assigned_user:  this.props.userId, 
    task_date: this.props.selectedDate,
    task_time: this.props.selectedTime !== null ? parseInt(this.props.selectedTime) : 10,
    task_msg: this.props.selectedMessage,
    is_completed:1
  }
  if(this.props.editData){
    this.props.actions.updateTask(data, this.props.token, this.props.editTaskData.id);
  }else{
       this.props.actions.saveTask(data, this.props.token);
  }
  this.props.actions.clearUserData();
  this.props.actions.getTaskData()
    }
onChange= (e) =>{
  // e.preventDefault();
  this.setState({
    date:e
  })
  const dateFormat = "YYYY-MM-DD";
  let formattedDate = moment(e).format(dateFormat);
   this.props.actions.updateDate(formattedDate, e);
}
handleTimeChange=(e)=>{
  // let time = e.hour+'.'+e.minute+"."+'00';
this.setState({
  selectedTime:e,
  time:e
});
this.props.actions.updateTime(e);
}
deleteTask=(item)=>{
  this.props.actions.getTaskData()
  this.props.actions.clearUserData();
  this.props.actions.deleteTask(item.id, this.props.token);
  
}
editTask=(item)=>{
  
  this.props.actions.editData(item);
  this.props.actions.selectedMessage(item.task_msg);
  this.props.actions.updateDate(item.task_date);
  this.props.actions.updateTime(item.task_time)
}
setShow=(value)=>{
  this.props.actions.closeBanner(value);
}
  render() {
    // Tue Mar 02 2021 00:00:00 GMT+0530 (India Standard Time
     const dateFormat = "y-MM-dd";
     const value = this.props.selectedDate ? new Date(this.props.selectedDate) : null;
     if(!_.isEmpty(this.props.errorMessage)){
      return (
        <Alert variant="danger" onClose={() => this.setShow(false)} dismissible>
          <Alert.Heading>{this.props.errorMessage}</Alert.Heading>
        </Alert>
      );
     }
      
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
            {/* <h5 className="grey-text text-darken-3">Add Task</h5> */}
            <div className="input-field">
                <input onChange={this.handleChange} 
                value={this.props.selectedMessage}
                placeholder="Type Something"
                required
               >
                </input>
            </div>
            <div className="datePicker">
      <DatePicker
       onChange={this.onChange}
       value={this.props.editData ? value: this.props.date}
       format={dateFormat}
       required
      />
    </div>
    <div className="timePicker">
       <TimePicker start="10:00" end="21:00" step={30} onChange={this.handleTimeChange} value={this.props.selectedTime} required/>
    </div>
    
              
            <div className="input-field">
                <button className="btn red lighten-1 z-depth 0">{this.props.editData ? "edit" : "Create"}</button>
            </div>
        </form>
  {
    this.props.loading  ?
    <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  :
  !_.isEmpty(this.props.taskData) && 
    <ShowTask 
    data={this.props.taskData} 
    deleteTask={this.deleteTask} 
    editTask={this.editTask}
    loading={this.props.loading}/>
  
    }
      </div>
    )
  }
}

// const mapDispatchToProps = (dispatch) =>{
//   return{
//     actions: () => dispatch(Actions)
//   }
// }

// connect(mapDispatchToProps)
