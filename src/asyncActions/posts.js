import {addPostAction, getPostsAction, removePostAction} from "../store/postReducer";
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
    return dispatch => {
        PostService.post(post)
            .then(() => dispatch(addPostAction(post)))
    }
}