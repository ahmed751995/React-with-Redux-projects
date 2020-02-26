import React, {Component} from 'react';
import {Row, Col, Label, Button} from 'reactstrap';
import { Control, LocalForm } from 'react-redux-form';

class SignIn extends Component {
    
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
		      <Label className="col-12" htmlFor="email"> Email</Label>
		      <Col>
			<Control.text model=".email" name="email" id="email"
				      placeholder="Email" className="form-control"/>
		      </Col>
		    </Row>
		    <Row className="form-group">
		      <Label className="col-12" htmlFor="password"> password</Label>
		      <Col>
			<Control.password  model=".password" name="password" id="password"
				      placeholder="Last Name" className="form-control"/>
		      </Col>
		    </Row>
		    <Row className="form-group">
		      <Col>
			<Button className="btn-lg btn-block" type="submit" color="primary">
			  Sign In
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

export default SignIn;
