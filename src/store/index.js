import {applyMiddleware, combineReducers, createStore} from "redux";
import {postReducer} from "./postReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form'
import {reduxPostFormReducer} from "./reduxPostFormReduser";

const initialUserState = {
    firstName: '',
    lastName: ''
};

const initialPostState = {
    id: null,
    title: '',
    description: ''
};



const rootReducer = combineReducers({

    posts: postReducer,
    account: reduxPostFormReducer,
    form: formReducer

})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))