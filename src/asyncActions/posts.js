import {addPostAction, editPostAction, getPostsAction, removePostAction} from "../store/postReducer";
import PostService from "../API/PostService";


export const getPosts = () => {
    return dispatch => {
        PostService.getAll()
            .then(response => dispatch(getPostsAction(response.data)))
    }
}

export const removePost = (id) => {
    return dispatch => {
        PostService.delete(id)
            .then(() => dispatch(removePostAction(id)))
    }
}

export const addPost = (post) => {
    console.log(post)
    return dispatch => {
        PostService.post(post)
            .then((response) => {
                console.log(response.data)
                dispatch(addPostAction(response.data))
            })
    }
}

export const editPost = (post) => {
    return dispatch => {
        PostService.post(post)
            .then((response) => {
                dispatch(editPostAction(post))
            })
    }
}