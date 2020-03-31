import { createReducer } from 'reduxsauce'
import { Types } from '../actionCreators'

// Redux para manipular usuarios - Users
export const INITIAL_STATE = {
    isLoading: false,
    isSaving: false,
    saved: false,
    data: [],
    user: {}
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

export const getUserRequest = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoading: true
    }
}
export const getUserSuccess = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoading: false,
        user: action.user
    }
}
export const getUserFailure = (state = INITIAL_STATE, action) => {
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

export const updateUserRequest = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSaving: true,
        error: false,
        errorMessage: '',
        saved: false
    }
}

export const updateUserSuccess = (state = INITIAL_STATE, action) => {

    const newUser = {
        ...state.user
    }
    Object.keys(action.user).forEach(key => {
        newUser[key] = action.user[key]
    })
    return {
        ...state,
        isSaving: false,
        saved: true,
        user: newUser,
        error: false
    }
}
export const updateUserFailure = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSaving: false,
        saved: false,
        error: true,
        errorMessage: action.error
    }
}

export const updateUserReset = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSaving: false,
        saved: false
    }
}

export const HANDLERS = {
    [Types.GET_USERS_REQUEST]: getUsersRequest,
    [Types.GET_USERS_SUCCESS]: getUsersSuccess,
    [Types.GET_USERS_FAILURE]: getUsersFailure,

    [Types.GET_USER_REQUEST]: getUserRequest,
    [Types.GET_USER_SUCCESS]: getUserSuccess,
    [Types.GET_USER_FAILURE]: getUserFailure,

    [Types.UPDATE_USER_REQUEST]: updateUserRequest,
    [Types.UPDATE_USER_SUCCESS]: updateUserSuccess,
    [Types.UPDATE_USER_FAILURE]: updateUserFailure,
    [Types.UPDATE_USER_RESET]: updateUserReset,

    [Types.REMOVE_USER_REQUEST]: removeUserRequest,
    [Types.REMOVE_USER_SUCCESS]: removeUserSuccess,
    [Types.REMOVE_USER_FAILURE]: removeUserFailure
}
export default createReducer(INITIAL_STATE, HANDLERS)