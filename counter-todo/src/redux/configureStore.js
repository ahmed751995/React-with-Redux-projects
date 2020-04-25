import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import { counter } from "./counter";
import { todo } from "./todo";

export const configureStore = () => {
    const store = createStore(
	combineReducers({
	    counter,
	    todo
	}),
	applyMiddleware(thunk, logger)
    );
    return store;
};

