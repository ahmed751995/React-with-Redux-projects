import React from 'react';

function Counter(props) {
    return(
	<div>
	  <h2>{props.counter.value}</h2>
	  <button onClick={props.addValue}>+</button>
	  <button onClick={props.minusValue}>-</button>
	</div>
    );
}

export default Counter;
