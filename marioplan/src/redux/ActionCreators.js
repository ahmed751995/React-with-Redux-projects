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
    setTimeout(() => dispatch(addProjects(projects)), 7000);
};
