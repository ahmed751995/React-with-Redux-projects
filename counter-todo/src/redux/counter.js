import * as ActionTypes from './ActionTypes';

export const counter = (state = [{value:0, id:0}], action) => {
    switch (action.type) {
    case ActionTypes.Plus:
    	return state.map(s => s.id === action.payload? {...s, value: s.value+1}: s);
	
    case ActionTypes.Minus:
    	return state.map(s => s.id === parseInt(action.payload)? {...s, value: s.value-1}: s);

    case ActionTypes.addCounter:
	return [...state, {value: 0, id: state[state.length-1].id + 1}];

    case ActionTypes.removeCounter:
	return state.filter(s => s.id !== action.payload);
    default:
	return state;
    }
};
