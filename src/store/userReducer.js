const defaultState = []

const GET_PROFILE = "GET_PROFILE"
const EDIT_PROFILE = "EDIT_PROFILE"

export const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_PROFILE:
            return {...action.payload}
        default:
            return state
    }
}

export const getProfileAction = (payload) => ({type: GET_PROFILE, payload})
