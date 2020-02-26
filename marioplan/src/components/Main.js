import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Dashboard from './Dashboard';

class Main extends Component {
    render(){
	return(
	    <div>
	      <Header />
	      <Switch>
		<Route path="/" component={Dashboard} />
		<Redirect to="/"/>
	      </Switch>
	    </div>
	);
    }
}

export default Main;
