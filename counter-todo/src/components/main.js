import React, { Component } from 'react';
import { connect } from 'react-redux';

import Counter from './counter';
import { addValue, minusValue, addCounter, removeCounter } from '../redux/ActionCreators';


const mapStateToProps = state => ({
    counter: state.counter
});

const mapDispatchToProps = dispatch => ({
    addValue: (id) => dispatch(addValue(id)),
    minusValue: (id) => dispatch(minusValue(id)),
    addCounter: () => dispatch(addCounter()),
    removeCoutner: (id) => dispatch(removeCounter(id))
});

class Main extends Component {
    render() {
	return(
	    <Counter
	      addValue={this.props.addValue}
	      minusValue={this.props.minusValue}
	      counter={this.props.counter}
	      addCounter = {this.props.addCounter}
	      removeCounter = {this.props.removeCoutner}
	      />
	);
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
