import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading} from './Loading';

function Projects({projects}) {
    let projects_list = projects.map(project => {
	return(
	    <Card className="mb-5 text-left" key={project.id}>
              <CardBody>
		<CardTitle>
		  <Link to={`/project/${project.id}`}>
		    <h2>{project.title}</h2>
		  </Link>
		</CardTitle>
		<CardSubtitle>
		  <small className="text-muted">{project.owner}</small>
		</CardSubtitle>
		<CardText>{project.text}</CardText>
		<CardText>
		  <small className="text-muted">{project.date}</small>
		</CardText>
              </CardBody>
	    </Card>
	);
    });
    return(
	<div>
	  {projects_list}
	</div>
    );
}

function Notifications() {
    return(
	<div>
	<p>Notifications</p>
	</div>
    );
}


function Dashboard(props) {
    if(props.isLoading) {
	return (
	    <div className="container">
	      <Loading />
	    </div>
	);
    }
    else if(props.errMess) {
	return (
	    <div className="container">
	      <h2>{props.errMess}</h2>
	    </div>  
	);
    }
    else 
	return(
	    <div className="container mt-5">
	      <div className="row">
		<div className="col-12 col-md-6">
		  <Projects projects={props.projects} />
		</div>
		<div className="col-12 col-md-6">
		  <Notifications />
		</div>
	      </div>
	    </div>
	);
}

export default Dashboard;
