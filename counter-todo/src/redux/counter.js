import * as ActionTypes from './ActionTypes';

export const counter = (state = {value:0}, action) => {
    switch (action.type) {
    case ActionTypes.Plus:
	return { ...state, value: state.value + 1};
	
    case ActionTypes.Minus:
	return {...state, value: state.value - 1};

    default:
	return state;
    }
};
