import React, {Component} from 'react';
import {Row, Col, Label, Button} from 'reactstrap';
import { Control, Form, Errors } from 'react-redux-form';

class SignUp extends Component {
    constructor(props) {
	super(props);
	this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(values) {
	console.log('values is'+ JSON.stringify(values));
	alert(JSON.stringify(values));
	this.props.resetSingUp();
    }

    render() {
	const required = (val) => val && val.length;
	const validEmail = (email) => !email || /^[\w]+@[\w]+\.[A-Za-z]{2,4}$/i.test(email);
	const minLength = (len) => (val) => !val || val.length >= len;
	const maxLength = (len) => (val) => !val ||  val.length <= len;
	      
	return(
	    <div className="container mt-3">
	      <div className="row">
		<div className="col-12">
		  <Form model="signUpForm" onSubmit={(values) => this.handleSubmit(values)}>
		    <Row className="form-group">
		      <Label className="col-12" htmlFor="firstname"> First Name</Label>
		      <Col>
			<Control.text model=".firstname" name="firstname" id="firstname"
				      placeholder="First Name" className="form-control"
				      validators={{
					  required, minLength: minLength(3),
					  maxLength: maxLength(15)
				      }}/>
			<Errors
			  className="text-danger"
			  model=".firstname"
			  show="touched"
			  messages={{
			      required: "Required ",
			      minLength: "Must be greater than 2 characters",
			      maxLength: "Must be 15 characters or less"
			  }}
			  />
		      </Col>
		    </Row>
		    
		    <Row className="form-group">
		      <Label className="col-12" htmlFor="lastname"> Last Name</Label>
		      <Col>
			<Control.text model=".lastname" name="lastname" id="lastname"
				      placeholder="Last Name" className="form-control"
				      validators={{
					  required, minLength: minLength(3),
					  maxLength: maxLength(15)
				      }}/>
			<Errors
			  className="text-danger"
			  model=".lastname"
			  show="touched"
			  messages={{
			      required: "Required ",
			      minLength: "Must be greater than 2 characters",
			      maxLength: "Must be 15 characters or less"
			  }}
			  />
		      </Col>
		    </Row>

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
			      required: "Required ",
			      validEmail: "Please enter a valid email"
			  }}
			  />
		      </Col>
		    </Row>
		    <Row className="form-group">
		      <Label className="col-12" htmlFor="password"> password</Label>
		      <Col>
			<Control.password model=".password" name="password" id="password"
					  placeholder="Last Name" className="form-control"
					  validators={{
					      required
					  }}/>
			<Errors
			  className="text-danger"
			  model=".password"
			  show="touched"
			  messages={{
			      required: "Required "
			  }}
			  />
		      </Col>
		    </Row>
		    <Row className="form-group">
		      <Col>
			<Button type="submit" className="btn-lg btn-block"  color="primary">
			  Sign Up
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

export default SignUp;
