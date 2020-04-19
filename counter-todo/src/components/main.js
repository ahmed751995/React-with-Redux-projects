import React, { Component } from 'react';
import { connect } from 'react-redux';

import Counter from './counter';
import { addValue, minusValue } from '../redux/ActionCreators';


const mapStateToProps = state => ({
    counter: state.counter
});

const mapDispatchToProps = dispatch => ({
    addValue: () => dispatch(addValue()),
    minusValue: () => dispatch(minusValue())
});

class Main extends Component {
    render() {
	return(
	    <Counter
	      addValue={this.props.addValue}
	      minusValue={this.props.minusValue}
	      counter={this.props.counter}
	      />
	);
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
