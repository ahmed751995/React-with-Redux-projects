import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Dashboard from './Dashboard';
import ProjectDetails from './ProjectDetails';
import SignIn from './SignIn';
import SignUp from './SignUp';
import CreateProject from './CreatProject';
import {projects} from '../shared/projects';

class Main extends Component {
	  
    render(){
	const project = ({match}) => {
	    let proj = projects.filter(proj => proj.id === parseInt(match.params.id))[0];
	    return (
		<ProjectDetails project={proj}/>
	    );
	};
	
	return(
	    <React.Fragment>
	      <Header />
	      <Switch>
		<Route exact path="/" component={()=> <Dashboard projects={projects}/>} />
		  <Route path ="/project/:id" component ={project}/>
		  <Route path="/signin" component={SignIn}/>
		  <Route path="/signup" component={SignUp}/>
		  <Route path="/createproject" component={CreateProject}/>
		<Redirect to="/"/>
	      </Switch>
	    </React.Fragment>
	);
    }
}

export default Main;
