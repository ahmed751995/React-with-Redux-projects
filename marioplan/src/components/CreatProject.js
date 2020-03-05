import React, {Component} from 'react';
import {Row, Col, Label, Button} from 'reactstrap';
import { Control, Form } from 'react-redux-form';
import { withRouter } from 'react-router-dom';

class CreateProject extends Component {
    constructor(props) {
	super(props);
	this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(values) {
	this.props.PostProject(values);
	this.props.resetNewProject();
	setTimeout(()=> {
	   this.props.history.push('/');
	}, 2000);
	
    }
    
    render() {
	return(
	    <div className="container mt-3">
	      <div className="row">
		<div className="col-12">
		  <Form model="newProject" onSubmit={(values) => this.handleSubmit(values)}>
		    <Row className="form-group">
		      <Label className="col-12" htmlFor="title">Project Title</Label>
		      <Col>
			<Control.text model=".title" name="title" id="title"
				      placeholder="Title" className="form-control"/>
		      </Col>
		    </Row>
		    <Row className="form-group">
		      <Label className="col-12" htmlFor="content">Project Details</Label>
		      <Col>
			<Control.textarea model=".content" name="content" id="content"
					  placeholder="Project details" className="form-control"
					  rows={9}>
			</Control.textarea>
		      </Col>
		    </Row>
		    <Row className="form-group">
		      <Col>
			<Button className="btn-lg btn-block" type="submit" color="primary">
			  Post project
			</Button>
		      </Col>
		    </Row>
		  </Form>
		</div>
	      </div>
	    </div>
	);
    }
}

export default withRouter(CreateProject);
