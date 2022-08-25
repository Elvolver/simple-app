import AuthService from "../API/AuthService";
import {loginAction, logoutAction} from "../store/loginFormReducer";


export const login = auth => {
    return async dispatch => {
        const response = await AuthService.login(auth)
        if (response.status === 200) {
            localStorage.setItem('access_token', response.data.token);
            return dispatch(loginAction(response.data))
        }
    }
}

export const logout = () => {
    return async dispatch => {
        const response = await AuthService.logout()
        if (response.status === 200) {
            localStorage.removeItem('access_token');
            return dispatch(logoutAction())
        }
    }
}

export const signup = (data) => {
    return async () => {
        const response = await AuthService.registration(data)
        if (response.status === 200) {
            return true
        }
    }
}

export const checkEmail = data => {
    return async () => {
        const response = await AuthService.checkEmail(data)
        if (response.status === 200) {
            return response.data
        }
    }
}