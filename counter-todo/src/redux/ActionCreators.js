import * as ActionTypes from "./ActionTypes";


export const addValue = () => (dispatch) => {
    dispatch({
	type: ActionTypes.Plus,
    });
};

export const minusValue = () => (dispatch) => {
    dispatch({
	type: ActionTypes.Minus
    });
};
