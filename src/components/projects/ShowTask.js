import React, { Component } from 'react'
import {AiOutlineDelete} from 'react-icons/ai'
import{FiEdit} from 'react-icons/fi'
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import _ from 'lodash';

export default class ShowTask extends Component {
    constructor(props){
        super(props);
        this.state={}
    }
    renderLis=()=>{
        // const renderTooltip = () => (
        //     <Tooltip placement='top'>
        //       delete Task
        //     </Tooltip>
        //   );
        let cmp=[];
        !_.isEmpty(this.props.data) && this.props.data.map((item) =>{
            return(
                cmp.push( 
                <div>
                <span className="taskName">{item.task_msg} </span>
               
                <span className="deleteTask">
                <AiOutlineDelete  
                onClick={()=>this.props.deleteTask(item)}
                />
                </span>
                <span>
                <FiEdit 
                onClick={()=>this.props.editTask(item)}/>
                </span>
                </div>
                )
            )});
            return cmp;
    };
    render(){
        return(
            
           <div>
               <span className = "taskList"> Task List </span>
               {this.renderLis()}
               
            </div>
        )
    }
};