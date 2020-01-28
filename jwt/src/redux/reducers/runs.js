import { createReducer } from 'reduxsauce'
import { Types } from '../actionCreators'

// Redux para manipular as corridas - Runs
export const INITIAL_STATE = {
    isLoading: false,
    isSaving: false,
    saved: false,
    data: [],
    error: ''
}
export const getRunsRequest = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoading: true
    }
}
export const getRunsSuccess = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoading: false,
        data: action.runs
    }
}
export const getRunsFailure = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoading: false
    }
}

export const createRunRequest = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSaving: true,
        saved: false,
    }
}

export const createRunSuccess = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSaving: false,
        saved: true,
        error: ''
    }
}

export const createRunFailure = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSaving: false,
        saved: false,
        error: true
    }
}

export const createRunReset = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSaving: false,
        saved: false
    }
}

export const removeRunRequest = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSaving: true
    }
}

export const removeRunSuccess = (state = INITIAL_STATE, action) => {
    const runs = [...state.data]
    const id = action.id
    const indexToDelete = runs.findIndex(run => run.id === id)
    runs.splice(indexToDelete, 1)

    return {
        ...state,
        isSaving: false,
        data: runs
    }
}

export const removeRunFailure = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSaving: false,
    }
}

export const HANDLERS = {
    [Types.GET_RUNS_REQUEST]: getRunsRequest,
    [Types.GET_RUNS_SUCCESS]: getRunsSuccess,
    [Types.GET_RUNS_FAILURE]: getRunsFailure,

    [Types.CREATE_RUN_REQUEST]: createRunRequest,
    [Types.CREATE_RUN_SUCCESS]: createRunSuccess,
    [Types.CREATE_RUN_FAILURE]: createRunFailure,
    [Types.CREATE_RUN_RESET]: createRunReset,

    [Types.REMOVE_RUN_REQUEST]: removeRunRequest,
    [Types.REMOVE_RUN_SUCCESS]: removeRunSuccess,
    [Types.REMOVE_RUN_FAILURE]: removeRunFailure
}
export default createReducer(INITIAL_STATE, HANDLERS)