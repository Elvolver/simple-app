import {applyMiddleware, combineReducers, createStore} from "redux";
import {postReducer} from "./postReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form'
import {postFormReducer} from "./postFormReduser";
import {loginFormReducer} from "./loginFormReducer";
import {userReducer} from "./userReducer";

const rootReducer = combineReducers({
    posts: postReducer,
    post: postFormReducer,
    auth: loginFormReducer,
    profile: userReducer,
    form: formReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))