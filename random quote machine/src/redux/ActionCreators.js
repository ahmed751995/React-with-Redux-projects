import * as ActionTypes from "./ActionTypes";
import { quotesUrl } from "../shared/Urls";


export const addQuotes = (quotes) => ({
    type: ActionTypes.fetchedQuotes,
    payload: quotes
});

export const failedQuotes = (errmess) => ({
    type: ActionTypes.fetchFailed,
    payload: errmess
});

export const fetchQuotes = () => (dispatch) => {
    return fetch(quotesUrl)
	.then(response => {
	    if(response.ok) {
		return response;
	    } else {
		var error = new Error('Error '+ response.status + ': ' +response.statusText);
		error.response = response;
		throw error;
	    }
	}, error => {
	    var errmess = new Error(error.message);
	    throw errmess;
	})
	.then(response => response.json())
	.then(quotes => dispatch(addQuotes(quotes.quotes)))
	.catch(error => dispatch(failedQuotes(error.message)));
};
