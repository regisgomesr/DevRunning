import { combineReducers } from 'redux'

import auth from './auth'
import runs from './runs'
import users from './users'

const rootReducer = combineReducers({
    auth, // ===  auth: auth
    runs,
    users
})
export default rootReducer

