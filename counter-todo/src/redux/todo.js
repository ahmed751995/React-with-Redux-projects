import * as ActionTypes from './ActionTypes';

export const todo = (state={tasks:[{task:'home',id:0,complete:false }],
			    visibility: "all"}, action) => {

    switch(action.type) {
    case ActionTypes.addTask:
	return {...state,
		tasks:[...state.tasks,
		       {task: action.payload, complete: false, id: state.tasks.length}]};

    case ActionTypes.toggleTask:
	return {...state,
		tasks:state.tasks.map(t => t.id === action.payload ?{...t, complete: !t.complete}: t)};

    case ActionTypes.active:
	return {...state, visibility:"active"};

    case ActionTypes.complete:
	return {...state, visibility: "complete"};

    case ActionTypes.all:
	return {...state, visibility: "all"};
	
    default:
	return state;
    }
};
