import React from 'react';

function Counter(props) {
	const counters = props.counter.map(c => {
		  return(
		      <div key={c.id}>
			<h2>{c.value}</h2>
			<button onClick={() => props.addValue(c.id)}>+</button>
			<button onClick={() => props.minusValue(c.id)}>-</button>
			<button onClick={() => props.removeCounter(c.id)}>remove counter</button>
		      </div>
		  );
	});
	return(
	    <div>
	      <button onClick={() => props.addCounter()}> add Counter </button>
	      {counters}
	    </div>

	);
    }

export default Counter;
