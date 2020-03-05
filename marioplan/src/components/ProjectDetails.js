import React from 'react';
import { Link } from 'react-router-dom';
function ProjectDetails(props) {
    if(props.project != null){
	return(
	    <div className="container">
	      <div className="row">
		<div className="col-lg-8">
		  <h1 className="mt-4">{props.project.title}</h1>
		  <p className="lead">
		    by
		    <Link to="/"> {props.project.owner}</Link>
		  </p>
		  <hr/>
		  <p>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(props.project.date)))}</p>
		  <hr/>
		  <p className="lead">{props.project.content}</p>
		</div>
	      </div>
	    </div>
	    
	);
    } else {
	return(<div></div>);
    }
}

export default ProjectDetails;
