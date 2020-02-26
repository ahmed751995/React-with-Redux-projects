import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Dashboard from './Dashboard';
import ProjectDetails from './ProjectDetails';
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
	    <div>
	      <Header />
	      <Switch>
		<Route exact path="/" component={()=> <Dashboard projects={projects}/>} />
		  <Route path ="/project/:id" component ={project}/>
		<Redirect to="/"/>
	      </Switch>
	    </div>
	);
    }
}

export default Main;
