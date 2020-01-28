import axios from 'axios'
import ActionCreators from '../actionCreators'
import { put } from 'redux-saga/effects'

export function* getUsers(action) {
    const token = localStorage.getItem('token')
    const users = yield axios.get(`http://localhost:3001/users`, {
        headers: {
            Authorization: 'Bearer '+token
        }
    })
    yield put(ActionCreators.getUsersSuccess(users.data))
}


export function* removeUser(action) {
    const token = localStorage.getItem('token')
    yield axios.delete(`http://localhost:3001/users/${action.id}`, {
        headers: {
            Authorization: 'Bearer '+token
        }
    })
    yield put(ActionCreators.removeUserSuccess(action.id))
}