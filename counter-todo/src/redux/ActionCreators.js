import * as ActionTypes from "./ActionTypes";


export const addValue = (id) => (dispatch) => {
    dispatch({
	type: ActionTypes.Plus,
	payload: id
    });
};

export const minusValue = (id) => (dispatch) => {
    dispatch({
	type: ActionTypes.Minus,
	payload: id
    });
};

export const addCounter = () => (dispatch) => {
    dispatch({
	type: ActionTypes.addCounter
    });
};

export const removeCounter = (id) => (dispatch) => {
    dispatch({
	type: ActionTypes.removeCounter,
	payload: id
    });
};
