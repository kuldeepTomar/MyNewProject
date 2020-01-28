import React,{Component} from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import projectDetails from './components/projects/projectDetails'
import SignedIn from './components/auth/SignedIn';
import SignedOut from './components/auth/SignedOut';
import CreateProject from './components/projects/createProject'



class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Dashboard}/>
            <Route path='/projects/:id' component={projectDetails}/>
            <Route path='/signIn' component={SignedIn}/>
            <Route path='/signOut' component={SignedOut}/>
            <Route path='/create' component={CreateProject}/>
          </Switch>
        </div>
      </BrowserRouter>

    )
  }
}




export default App;
