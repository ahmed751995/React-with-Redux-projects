import * as ActionTypes from './ActionTypes';

let initialState = {
    isLoading: true,
    errMess: null,
    projects: []
};

export const Projects = (state = initialState, action) => {
    switch (action.type) {

    case ActionTypes.PROJECTS_FAILED:
	return {...state, isLoading: false, errMess: action.payload};


    case ActionTypes.PROJECTS_LOADING:
	return {...state, isLoading: true, errMess: null, projects: action.payload};
	
    case ActionTypes.ADD_PROJECTS:
	return {...state, isLoading: false, errMess: null, projects: action.payload};
	
    default:
	return state;
    }
};
