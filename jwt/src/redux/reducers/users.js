import { createReducer } from 'reduxsauce'
import { Types } from '../actionCreators'

// Redux para manipular usuarios - Users
export const INITIAL_STATE = {
    isLoading: false,
    isSaving: false,
    saved: false,
    data: [],
    error: ''
}
export const getUsersRequest = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoading: true
    }
}
export const getUsersSuccess = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoading: false,
        data: action.users
    }
}
export const getUsersFailure = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoading: false
    }
}


export const removeUserRequest = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSaving: true
    }
}

export const removeUserSuccess = (state = INITIAL_STATE, action) => {
    const users = [...state.data]
    const id = action.id
    const indexToDelete = users.findIndex(user => user.id === id)
    users.splice(indexToDelete, 1)

    return {
        ...state,
        isSaving: false,
        data: users
    }
}

export const removeUserFailure = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSaving: false,
    }
}

export const HANDLERS = {
    [Types.GET_USERS_REQUEST]: getUsersRequest,
    [Types.GET_USERS_SUCCESS]: getUsersSuccess,
    [Types.GET_USERS_FAILURE]: getUsersFailure,

    [Types.REMOVE_USER_REQUEST]: removeUserRequest,
    [Types.REMOVE_USER_SUCCESS]: removeUserSuccess,
    [Types.REMOVE_USER_FAILURE]: removeUserFailure
}
export default createReducer(INITIAL_STATE, HANDLERS)