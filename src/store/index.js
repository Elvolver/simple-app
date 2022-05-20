import {applyMiddleware, combineReducers, createStore} from "redux";
import {postReducer} from "./postReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from 'redux-thunk';
import {postFormReducer} from "./postFormReducer";

const rootReducer = combineReducers({

    posts: postReducer,
    post: postFormReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))