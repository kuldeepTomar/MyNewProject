import React from 'react'
import { firestoreConnect } from 'react-redux-firebase'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

const projectDetails = (props) => {
    const { project,auth } = props
    if(!auth.uid) return <Redirect to="/signIn" />
    if(project){
        return(
            <div className="container section project-details">
                <div className="card white z-depth-0">
                    <div className="card-content">
                        <span className="card-title"> {project.title}</span>
                        <p>{project.content}</p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Posted By {project.UserFirstName} {project.UserLastName}</div>
                        <div>23rd jan,6pm</div>
                    </div>   
                </div>  
            </div>
        )
    }
    else{
        return (
                <div className="conatiner">
                    <p className="center">Loading Project ...</p>
                </div>
            )
    }
}


const mapStateToProps = (state,ownProps) =>{
    //console.log(state)
    const id = ownProps.match.params.id
    const projects = state.firestore.data.NewProject
    const project = projects ? projects[id]:null
    return{
        project:project,
        auth:state.firebase.auth

    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'NewProject'}
    ])
)(projectDetails);

