const defaultState = []

const LOGIN = "LOGIN"
const LOGOUT = "LOGOUT"
const LOGIN_SUCCESS = "LOGIN_SUCCESS"

export const loginFormReducer = (state = defaultState, action) => {
    switch (action.type) {
        case LOGIN:
            console.log('action.payload', action.payload)
            return {...state, email: action.payload.email, access_token: action.payload.token, isAuth: true}
        case LOGOUT:
            return {auth: null}
        case LOGIN_SUCCESS:
            console.log(LOGIN_SUCCESS)
            return {
                data: {...state.data, auth: {}}
            }
        default:
            return state
    }
}
export const clearLoginFormAction = () => ({type: LOGIN_SUCCESS})
export const loginAction = (payload) => ({type: LOGIN, payload})
export const logoutAction = () => ({type: LOGOUT})
