import { takeLatest, all, put } from 'redux-saga/effects'
import { Types } from '../actionCreators'
import axios from 'axios'
import jwtDecode from 'jwt-decode'
import ActionCreators from '../actionCreators'

import { getRuns, createRun } from './runs'

function* login(action){

    let token = localStorage.getItem('token')
    
    const login = yield axios.post('http://localhost:3001/users/login', {
    email: action.email,
    passwd: action.passwd
    })

    if(login.data.token) {
        token = login.data.token
        localStorage.setItem('token', token)

        const user = jwtDecode(token) // descompactar token
        localStorage.setItem('user', user)

        yield put(ActionCreators.signinSuccess(user))
    }else {
        
        yield put(ActionCreators.signinFailure(login.data.message))
    }
}

function* aut(){
    const token = localStorage.getItem('token')

    if(token){
        try{
            const user = jwtDecode(token)
            yield put(ActionCreators.authSuccess(user))
        }catch(err){
            yield put(ActionCreators.authFailure('invalid token'))
        }
        
    }else{
        yield put(ActionCreators.authFailure('no token'))
    }
}

export default function* rootSaga() {
    yield all([
        takeLatest(Types.SIGNIN_REQUEST, login),
        takeLatest(Types.AUTH_REQUEST, aut),
        takeLatest(Types.GET_RUNS_REQUEST, getRuns),
        takeLatest(Types.CREATE_RUN_REQUEST, createRun),
        put(ActionCreators.authRequest())
    ])
}