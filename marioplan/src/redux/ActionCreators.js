import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';



export const projectsLoading = () => ({
    type: ActionTypes.PROJECTS_LOADING,
});

export const projectsFailed = (errmess) => ({
    type: ActionTypes.PROJECTS_FAILED,
    payload: errmess
});

export const addProjects = (projects) => ({
    type: ActionTypes.ADD_PROJECTS,
    payload: projects
});

export const fetchProjects = () => (dispatch) => {
    dispatch(projectsLoading());
    return fetch(baseUrl + 'projects')
	.then(response => {
	    if(response.ok) {
		return response;
	    } else {
		var error = new Error('Error ' + response.status + ': ' + response.statusText);
		error.response = response;
		throw error;
	    }
	}, error => {
	    var errmess = new Error(error.message);
	    throw errmess;
	})
	.then(response => response.json())
	.then(projects => dispatch(addProjects(projects)))
	.catch(error => dispatch(projectsFailed(error.message)));
};

export const addProject= (project) => ({
    type: ActionTypes.ADD_PROJECT,
    payload: project
});

export const PostProject = (project) => (dispatch) => {
    let date =  new Date().toISOString();
    let newProject = {
	title: project.title,
	owner: 'ahmed',
	content: project.content,
	date: date
    };
    return fetch(baseUrl+'projects', {
	method: 'POST',
	body: JSON.stringify(newProject),
	headers: {
	    "Content-type": "application/json"
	},
	credentials: "same-origin"
    })
	.then(response => {
	    if(response.ok) return response;
	    else {
		var error = new Error('Error '+ response.status + ': ' + response.statusText);
		error.response = response;
		throw error;
	    }
	}, error => {
	    var errormess = new Error(error.message);
	    throw errormess;
	})
	.then(response => response.json())
	.then(project => dispatch(addProject(project)))
	.catch(error => alert('Can\'t Post your project' + error.message));
};
