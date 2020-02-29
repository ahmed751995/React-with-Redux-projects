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

const mapStateToProps = state =>({
    projects:  state.projects
});

const mapDispatchToProps = dispatch => ({
    resetNewProject: () => dispatch(actions.reset('newProject')),
    resetSignIn: () => dispatch(actions.reset('signInForm')),
    resetSingUp: () => dispatch(actions.reset('signUpForm'))
});

class Main extends Component {
   
    render(){
	const project = ({match}) => {
	    let proj = this.props.projects.filter(proj => proj.id === parseInt(match.params.id))[0];
	    return (
		<ProjectDetails project={proj}/>
	    );
	};
	
	return(
	    <React.Fragment>
	      <Header />
	      <Switch>
		<Route exact path="/" component={()=> <Dashboard projects={this.props.projects}/>} />
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
