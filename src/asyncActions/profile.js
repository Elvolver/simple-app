import UserService from "../API/UserService";
import {getProfileAction} from "../store/userReducer";
import {addPostAction} from "../store/postReducer";

export const getProfile = () => {
    return dispatch => {
        UserService.getProfile()
            .then(response => dispatch(getProfileAction(response.data)))
    }
}

export const editProfile = data => {
    return dispatch => {
        UserService.editProfile(data)
            .then(response => dispatch(getProfileAction(response.data)))
    }
}

export const editAvatar = data => {
    return dispatch => {
        UserService.editAvatar(data)
            .then(response => dispatch(getProfileAction(response.data)))
    }
}