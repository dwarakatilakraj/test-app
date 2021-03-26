import React, { Component } from 'react'
import Notifications from './Notifications'
import ProjectList from "../projects/ProjectList"
import { connect } from "react-redux"

export default class Dashboard extends Component{
    render(){
        console.log(this.props)
        return(
            <div className = "dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList 
                           Projects = {this.props.projects}/>
                        </div>
                        <div className="col s12 m5 offser-m1">
                          <Notifications />
                        </div>
                    
                </div>
            
            
            
            
            </div>
        )
    }
}

// const mapStatetoProps = (state) =>{
//     return{
//         projects:state.ProjectReducer.Projects
//     }

// }

// export default connect(mapStatetoProps)(Dashboard)

