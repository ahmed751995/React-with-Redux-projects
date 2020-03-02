import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import Header from './Header';
import Dashboard from './Dashboard';
import ProjectDetails from './ProjectDetails';
import SignIn from './SignIn';
import SignUp from './SignUp';
import CreateProject from './CreatProject';
import { fetchProjects } from '../redux/ActionCreators.js';
const mapStateToProps = state =>({
    projects:  state.projects
});

const mapDispatchToProps = dispatch => ({
    resetNewProject: () => dispatch(actions.reset('newProject')),
    resetSignIn: () => dispatch(actions.reset('signInForm')),
    resetSingUp: () => dispatch(actions.reset('signUpForm')),
    fetchProjects: () => dispatch(fetchProjects())
});

class Main extends Component {
    componentDidMount() {
	console.log('mounting now');
	this.props.fetchProjects();
    }
   
    render(){
	const project = ({match}) => {
	    let proj = this.props.projects.projects.filter(proj => proj.id === parseInt(match.params.id))[0];
	    return (
		<ProjectDetails project={proj}/>
	    );
	};

	const HomePage = () => {
	    return(
		<Dashboard
		  projects={this.props.projects.projects}
		  errMess={this.props.projects.errMess}
		  isLoading={this.props.projects.isLoading}
		   /> );
	};
	
	return(
	    <React.Fragment>
	      <Header />
	      <Switch>
		<Route exact path="/" component={HomePage} />
		  <Route path ="/project/:id" component ={project}/>
		  <Route path="/signin" component={() =>
		    <SignIn resetSignIn={this.props.resetSignIn}/>}
		    />
		    <Route path="/signup" component={() =>
		      <SignUp resetSingUp={this.props.resetSingUp}/>}
		      />
		  <Route path="/createproject" component={() =>
		    <CreateProject resetNewProject={this.props.resetNewProject}/>}
		    />
		<Redirect to="/"/>
	      </Switch>
	    </React.Fragment>
	);
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
