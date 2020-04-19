import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import {counter} from "./counter";

export const configureStore = () => {
    const store = createStore(
	combineReducers({
	    counter
	}),
	applyMiddleware(thunk, logger)
    );
    return store;
};

