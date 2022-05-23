const ACCOUNT_SAVE_SUCCESS = "ACCOUNT_SAVE_SUCCESS"
const LOAD = "LOAD"

export const reduxPostFormReducer = (state = {}, action) => { // <------ 'account' is name of form given to reduxForm()
    switch (action.type) {
        case ACCOUNT_SAVE_SUCCESS:
            console.log(ACCOUNT_SAVE_SUCCESS)
            return {
                data: undefined
            };
        case LOAD:
            console.log(LOAD)
            return {
                data: action.payload
            }
        default:
            return state;
    }
}

export const clearPostFormAction = () => ({type: ACCOUNT_SAVE_SUCCESS})
export const postLoadAction = (payload) => ({type: LOAD, payload})