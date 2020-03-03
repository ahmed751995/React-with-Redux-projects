import * as ActionTypes from './ActionTypes';
import { projects } from '../shared/projects';

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
    setTimeout(() => dispatch(addProjects(projects)), 2000);
};

export const addProject= (project) => ({
    type: ActionTypes.ADD_PROJECT,
    payload: project
});

export const PostProject = (project) => (dispatch) => {
    let newProject = {
	title: project.title,
	owner: 'ahmed',
	text: project.content,
	date: '3/1/123'
    };
    dispatch(addProject(newProject));
};
