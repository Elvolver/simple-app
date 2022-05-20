const defaultState = {}


const SET_POST = "SET_POST"
const SET_POST_ID = "SET_POST_ID"
const SET_POST_TITLE = "SET_POST_TITLE"
const SET_POST_DESCRIPTION = "SET_POST_DESCRIPTION"
const CLEAR_POST_FORM = "CLEAR_POST_FORM"

export const postFormReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_POST:
            return action.payload
        case SET_POST_ID:
            return {...state, id: action.payload}
        case SET_POST_TITLE:
            return {...state, title: action.payload}
        case SET_POST_DESCRIPTION:
            return {...state, description: action.payload}
        case CLEAR_POST_FORM:
            return defaultState
        default:
            return state
    }
}

export const setPostAction = (payload) => ({type: SET_POST, payload})
export const setPostIdAction = (payload) => ({type: SET_POST_ID, payload})
export const setPostTitleAction = (payload) => ({type: SET_POST_TITLE, payload})
export const setPostDescriptionAction = (payload) => ({type: SET_POST_DESCRIPTION, payload})
export const clearPostFormAction = () => ({type: CLEAR_POST_FORM})
