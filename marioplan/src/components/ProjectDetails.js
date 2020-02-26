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
		  <p>{props.project.date}</p>
		  <hr/>
		  <p className="lead">{props.project.text}</p>
		  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos iste ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus, voluptatibus.</p>
		  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis unde eius illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat perspiciatis. Enim, iure!</p>
		  <blockquote className="blockquote">
		    <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
		    <footer className="blockquote-footer">Someone famous in
		      <cite title="Source Title">Source Title</cite>
		    </footer>
		  </blockquote>
		  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, nostrum, aliquid, animi, ut quas placeat totam sunt tempora commodi nihil ullam alias modi dicta saepe minima ab quo voluptatem obcaecati?</p>
		  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, dolor quis. Sunt, ut, explicabo, aliquam tenetur ratione tempore quidem voluptates cupiditate voluptas illo saepe quaerat numquam recusandae? Qui, necessitatibus, est!</p>
		</div>
	      </div>
	    </div>
	    
	);
    } else {
	return(<div></div>);
    }
}

export default ProjectDetails;
