import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavItem, Nav, Collapse,
	 NavbarToggler} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
	super(props);
	this.state = {
	    isNavOpen: false  
	};
	this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
	this.setState({
	    isNavOpen: !this.state.isNavOpen
	});
    }
    
    render() {
	
	return(
	    <Navbar color="dark" dark expand="md">
	      <div className="container">
		<NavbarBrand className="mr-auto" href="/">Mario Plan</NavbarBrand>
		<NavbarToggler onClick={this.toggleNav} />
		<Collapse navbar isOpen={this.state.isNavOpen}>
		  <Nav navbar className="ml-auto">
		    <NavItem>
		      <NavLink className="nav-link" to="/signup">Sign Up</NavLink>
		    </NavItem>
		    <NavItem>
		      <NavLink className="nav-link" to="/signin">Sign In</NavLink>
		    </NavItem>
		    <NavItem>
		      <NavLink className="nav-link" to="/createproject">New Project</NavLink>
		    </NavItem>
		    <NavItem>
		      <NavLink className="nav-link" to="/">Log Out</NavLink>
		    </NavItem>
		    <NavItem>
		      <NavLink className="nav-link" to="/">
			<span className="fa fa-user fa-lg"></span>
		      </NavLink>
		    </NavItem>
		  </Nav>
		</Collapse>
	      </div>
	    </Navbar>
	);
    }
}

export default Header;
