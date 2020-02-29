import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Projects } from './projects';
import { createForms } from 'react-redux-form';
import { newProject, signInForm, signUpForm } from './forms';

export const ConfigureStore = () => {
    const store = createStore(
	combineReducers({
	    projects: Projects,
	    ...createForms({
		newProject: newProject,
		signInForm: signInForm,
		signUpForm: signUpForm
	    })
	}),
	applyMiddleware(thunk, logger)
    );
    return store;
};

