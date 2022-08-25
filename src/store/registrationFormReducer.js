const defaultState = []

const SIGNUP = "SIGNUP"

export const registrationFormReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SIGNUP:
            console.log('action.payload', action.payload)
            return {...state, email: action.payload.email, access_token: action.payload.token, isAuth: true}
        default:
            return state
    }
}
export const clearLoginFormAction = () => ({type: LOGIN_SUCCESS})
export const loginAction = (payload) => ({type: LOGIN, payload})
export const logoutAction = () => ({type: LOGOUT})
