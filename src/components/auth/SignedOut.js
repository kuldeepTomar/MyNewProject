import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import { connect} from 'react-redux'
import { signUp} from '../../store/Actions/authAction'

 class SignedOut extends Component {
     state={
         email:'',
         password:'',
         firstName:'',
         lastName:''

     }
     handlechange=(e) => {
         this.setState({
             [e.target.id]:e.target.value
         })

     }
     handleSubmit=(e) => {
         e.preventDefault()
        this.props.signUp(this.state)

    }
    render() {
        const { auth ,authError} = this.props
        if(auth.uid) return <Redirect to='/signIn' />
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">SignUp</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input onChange={this.handlechange} type="email" id='email'></input>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input onChange={this.handlechange} type="password" id='password'></input>
                    </div>
                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input onChange={this.handlechange} type="text" id='firstName'></input>
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input onChange={this.handlechange} type="text" id='lastName'></input>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">SIGNUP</button>
                        <div className="red-text center">
                            {authError ? <p>{authError}</p> : null}
                        </div>
                    </div>
                </form>

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        auth:state.firebase.auth,
        authError:state.auth.authError
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        signUp:(newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignedOut);

