import * as ActionTypes from "./ActionTypes";

export const Quotes = (
    state = {
	errMess: null,
	quotes: []
    }, action) => {
	switch (action.type) {
	    
	case ActionTypes.fetchedQuotes:
	    return {...state, errMess: null, quotes: action.payload};

	case ActionTypes.fetchFailed:
	    return {...state, errMess: action.payload };
	    
	default:
	    return state;
	}
    };
