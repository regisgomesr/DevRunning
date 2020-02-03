import jwtDecode from 'jwt-decode'
import ActionCreators from '../actionCreators'
import { put, call } from 'redux-saga/effects'


export const login = ({ api }) => function* (action){

    let token = ''
    const login = yield call(api.login, {
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

export const auth = ({ api }) => function* (){
    const token = localStorage.getItem('token')
    if(token){
        try{
            const user = yield call(api.getUser, 'me')
            yield put(ActionCreators.authSuccess(user.data))
        }catch(err){
            yield put(ActionCreators.authFailure('invalid token'))
        }
        
    }else{
        yield put(ActionCreators.authFailure('no token'))
    }
}

export const updateProfile = ({ api }) => function* (action) {

    const userToSave = {
        ...action.user
    }
    yield call(api.updateProfile, userToSave)
    yield put(ActionCreators.updateProfileSuccess(userToSave))   
}

export const createProfile = ({ api }) => function* (action) {
    const userToSave = {
        ...action.user
    }

    const user = yield call(api.updateUser, userToSave)
    
    if(user && user.data && user.data.error) {
        put(ActionCreators.createProfileFailure(user.data.message))
    }else{
        yield put(ActionCreators.createProfileSuccess(userToSave))
        yield put(ActionCreators.signinRequest(userToSave.email, userToSave.passwd))
    }
}

export function* destroyAuth(){

    localStorage.removeItem('token')
    localStorage.removeItem('user')
    yield put(ActionCreators.destroyAuthSuccess())
   
}
