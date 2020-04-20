import React, { Component } from 'react';

class Counter extends Component {
    render () {
	const counters = this.props.counter.map(c => {
		  return(
		      <div key={c.id}>
			<h2>{c.value}</h2>
			<button onClick={() => this.props.addValue(c.id)}>+</button>
			<button onClick={() => this.props.minusValue(c.id)}>-</button>
			<button onClick={() => this.props.removeCounter(c.id)}>remove counter</button>
		      </div>
		  );
	});
	return(
	    <div>
	      <button onClick={() => this.props.addCounter()}> add Counter </button>
	      {counters}
	    </div>

	);
    }
}

export default Counter;
