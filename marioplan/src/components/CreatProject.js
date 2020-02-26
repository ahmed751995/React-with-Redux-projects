import React, {Component} from 'react';
import {Row, Col, Label, Button} from 'reactstrap';
import { Control, LocalForm } from 'react-redux-form';

class CreateProject extends Component {
    
    handleSubmit(values) {
	console.log('values is'+ JSON.stringify(values));
	alert(JSON.stringify(values));
    }

    render() {
	return(
	    <div className="container mt-3">
	      <div className="row">
		<div className="col-12">
		  <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
		    <Row className="form-group">
		      <Label className="col-12" htmlFor="title">Project Title</Label>
		      <Col>
			<Control.text model=".title" name="title" id="title"
				      placeholder="Title" className="form-control"/>
		      </Col>
		    </Row>
		    <Row className="form-group">
		      <Label className="col-12" htmlFor="email"> Email</Label>
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
		  </LocalForm>
		</div>
	      </div>
	    </div>
	);
    }
}

export default CreateProject;
