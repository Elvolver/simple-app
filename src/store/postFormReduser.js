const POST_SAVE_SUCCESS = "POST_SAVE_SUCCESS"
const POST_LOAD = "POST_LOAD"

export const postFormReducer = (state = {data: {}}, action) => { // <------ 'account' is name of form given to reduxForm()
    switch (action.type) {
        case POST_SAVE_SUCCESS:
            console.log(POST_SAVE_SUCCESS)
            return {
                data: {...state.data, post: {}}
            };
        case POST_LOAD:
            console.log(POST_LOAD)
            return {
                data: {...state.data, post: action.payload}
            }
        default:
            return state;
    }
}

export const clearPostFormAction = () => ({type: POST_SAVE_SUCCESS})
export const postLoadAction = (payload) => ({type: POST_LOAD, payload})