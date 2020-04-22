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


export const addTask = (task) => (dispatch) => {
    dispatch({
	type: ActionTypes.addTask,
	payload: task
    });
};

export const toggleTask = (id) => (dispatch) => {
    dispatch({
	type: ActionTypes.toggleTask,
	payload: id
    });
};


export const active = () => (dispatch) => {
    dispatch({
	type: ActionTypes.active
    });
};

export const complete = () => (dispatch) => {
    dispatch({
	type: ActionTypes.complete
    });
};

export const all = () => (dispatch) => {
    dispatch({
	type: ActionTypes.all
    });
};
