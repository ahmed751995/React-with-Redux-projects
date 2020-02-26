import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';

function Posts() {
    return(
	<React.Fragment>
	  <Card className="mb-5">
            <CardBody>
              <CardTitle>Project Title</CardTitle>
              <CardSubtitle>Project Date 3/2/2020</CardSubtitle>
              <CardText>Card text Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
	       <CardText>
		<small className="text-muted">Last updated 3 mins ago</small>
              </CardText>
            </CardBody>
	  </Card>
	  <Card className="mb-5">
            <CardBody>
              <CardTitle>Project Title</CardTitle>
              <CardSubtitle>Project Date 3/2/2020</CardSubtitle>
              <CardText>Card text Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
	       <CardText>
		<small className="text-muted">Last updated 3 mins ago</small>
              </CardText>
            </CardBody>
	  </Card>
	  <Card className="mb-5">
            <CardBody>
              <CardTitle>Project Title</CardTitle>
              <CardSubtitle>owner</CardSubtitle>
              <CardText>Card text Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
	      <CardText>
		<small className="text-muted">Last updated 3 mins ago</small>
              </CardText>
            </CardBody>
	  </Card>
	</React.Fragment>
    );
}

function Notifications() {
    return(
	<p>Notifications</p>
    );
}


function Dashboard() {
    return(
	<div className="container mt-5">
	  <div className="row">
	    <div className="col-12 col-md-6">
	      <Posts />
	    </div>
	  <div className="col-12 col-md-6">
	    <Notifications />
	  </div>
	  </div>
	</div>
    );
}

export default Dashboard;
