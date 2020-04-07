import React, { Component } from 'react';
import Markdown from './markdown';

class Main extends Component {
    render() {
	return(
	    <div className="container main">
	      <h1 className="text-center title">Markdown Demo</h1>
	      <Markdown />
	    </div>
	);
    }
}

export default Main;
