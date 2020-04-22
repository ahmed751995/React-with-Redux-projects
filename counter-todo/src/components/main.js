import React, { Component } from 'react';
import { connect } from 'react-redux';

import Counter from './counter';
import Todo from './todo';
import { addValue, minusValue, addCounter, removeCounter,
	 addTask, toggleTask, all, complete, active } from '../redux/ActionCreators';


const mapStateToProps = state => ({
    counter: state.counter,
    todo: state.todo,
});

const mapDispatchToProps = dispatch => ({
    addValue: (id) => dispatch(addValue(id)),
    minusValue: (id) => dispatch(minusValue(id)),
    addCounter: () => dispatch(addCounter()),
    removeCoutner: (id) => dispatch(removeCounter(id)),
    addTask: (task) => dispatch(addTask(task)),
    toggleTask: (id) => dispatch(toggleTask(id)),
    all: () => dispatch(all()),
    complete: () => dispatch(complete()),
    active: () => dispatch(active())
});

class Main extends Component {
    render() {
	return(
	    // <Counter
	    //   addValue={this.props.addValue}
	    //   minusValue={this.props.minusValue}
	    //   counter={this.props.counter}
	    //   addCounter = {this.props.addCounter}
	    //   removeCounter = {this.props.removeCoutner}
	    //   />
	    <Todo
	      task={this.props.todo}
	      addTask={this.props.addTask}
	      toggleTask={this.props.toggleTask}
	      all={this.props.all}
	      active={this.props.active}
	      complete={this.props.complete}
	      />
	);
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
