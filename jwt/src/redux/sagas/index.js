import { takeLatest, all, put } from 'redux-saga/effects'
import { Types } from '../actionCreators'
import ActionCreators from '../actionCreators'

import { getRuns, createRun, removeRun } from './runs'
import { auth, login, destroyAuth, updateProfile, createProfile } from './auth'
import { getUsers, removeUser } from './users'

export default function* rootSaga() {
    yield all([
        takeLatest(Types.SIGNIN_REQUEST, login),
        takeLatest(Types.AUTH_REQUEST, auth),
        takeLatest(Types.GET_RUNS_REQUEST, getRuns),
        takeLatest(Types.CREATE_RUN_REQUEST, createRun),
        takeLatest(Types.DESTROY_AUTH_REQUEST, destroyAuth),
        takeLatest(Types.UPDATE_PROFILE_REQUEST, updateProfile),
        takeLatest(Types.CREATE_PROFILE_REQUEST, createProfile),
        takeLatest(Types.REMOVE_RUN_REQUEST, removeRun),
        takeLatest(Types.GET_USERS_REQUEST, getUsers),
        takeLatest(Types.REMOVE_USER_REQUEST, removeUser),

        put(ActionCreators.authRequest())
    ])
}