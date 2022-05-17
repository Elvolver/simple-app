const defaultState = {
    posts: [],
}

const ADD_POST = "ADD_POST"
const GET_POSTS = "FETCH_POSTS"
const REMOVE_POST = "REMOVE_POST"


export const postReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {...state, posts: [...state.posts, action.payload]}
        case GET_POSTS:
            return {...state, posts: [...state.posts,...action.payload]}
        case REMOVE_POST:
            return {...state, posts: state.posts.filter(post => post.id !== action.payload)}
        default:
            return state
    }
}

export const addPostAction = (payload) => ({type: ADD_POST, payload})
export const getPostsAction = (payload) => ({type: GET_POSTS, payload})
export const removePostAction = (payload) => ({type: REMOVE_POST, payload})