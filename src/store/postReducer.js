const defaultState = []

const ADD_POST = "ADD_POST"
const EDIT_POST = "EDIT_POST"
const GET_POSTS = "FETCH_POSTS"
const REMOVE_POST = "REMOVE_POST"

export const postReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {...state, ...action.payload}
        case EDIT_POST:
            console.log(EDIT_POST)

            return state.map(
                    post => post.id === action.payload.id ? action.payload : post
                )

        case GET_POSTS:
            return {...action.payload}
        case REMOVE_POST:
            return state.filter(post => post.id !== action.payload)
        default:
            return state
    }
}

export const addPostAction = (payload) => ({type: ADD_POST, payload})
export const editPostAction = (payload) => ({type: EDIT_POST, payload})
export const getPostsAction = (payload) => ({type: GET_POSTS, payload})
export const removePostAction = (payload) => ({type: REMOVE_POST, payload})
