import React, {Component} from 'react';
import {Row, Col, Label, Button} from 'reactstrap';
import { Control, Form, Errors } from 'react-redux-form';

class SignIn extends Component {
    constructor(props) {
	super(props);
	this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(values) {
	console.log('values is '+ JSON.stringify(values));
	alert('values is '+ JSON.stringify(values));
	this.props.resetSignIn();
    }

    render() {
	const required = (val) => val && val.length;
	const validEmail = (email) => !email || /^[\w]+@[\w]+\.[A-Za-z]{2,4}$/i.test(email);
	
	return(
	    <div className="container mt-3">
	      <div className="row">
		<div className="col-12">
		  <Form model="signInForm" onSubmit={(values) => this.handleSubmit(values)}>
		    <Row className="form-group">
		      <Label className="col-12" htmlFor="email"> Email</Label>
		      <Col>
			<Control.text model=".email" name="email" id="email"
				      placeholder="Email" className="form-control"
				      validators={{
					  required, validEmail
				      }}/>
			<Errors
			  className="text-danger"
			  model=".email"
			  show="touched"
			  messages={{
			      required: "Required",
			      validEmail: "Please enter a valid email"
			  }}
			  />
		      </Col>
		    </Row>
		    <Row className="form-group">
		      <Label className="col-12" htmlFor="password"> password</Label>
		      <Col>
			<Control.password  model=".password" name="password" id="password"
					   placeholder="password" className="form-control"
					   validators={{
					       required
					   }}/>
			<Errors
			  className="text-danger"
			  model=".password"
			  show="touched"
			  messages={{
			      required: "Required"
			  }}
			  />
		      </Col>
		    </Row>
		    <Row className="form-group">
		      <Col>
			<Button className="btn-lg btn-block" type="submit" color="primary">
			  Sign In
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

export default SignIn;
