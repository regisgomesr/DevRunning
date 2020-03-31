import { createActions } from 'reduxsauce'

export const {
    Types,
    Creators
} = createActions({
    // verificando se usuario conseguiu logar ou nao
    signinRequest: ['email', 'passwd'],
    signinSuccess: ['user'],
    signinFailure: ['error'],

    // Verificando se usuario esta autenticado ou nao
    authRequest: null,
    authSuccess: ['user'] ,
    authFailure: null,

    destroyAuthRequest: null,
    destroyAuthSuccess: null,

    getRunsRequest: ['admin'],
    getRunsSuccess: ['runs'],
    getRunsFailure: null,

    createRunRequest: ['run'],
    createRunSuccess: ['run'],
    createRunFailure: ['error'],
    createRunReset: null,

    removeRunRequest: ['id'],
    removeRunSuccess: ['id'],
    removeRunFailure: ['error'],

    getUsersRequest: null,
    getUsersSuccess: ['users'],
    getUsersFailure: null,

    getUserRequest: ['id'],
    getUserSuccess: ['user'],
    getUserFailure: null,

    removeUserRequest: ['id'],
    removeUserSuccess: ['id'],
    removeUserFailure: ['error'],

    updateProfileRequest: ['user'],
    updateProfileSuccess: ['user'],
    updateProfileFailure: ['error'],
    updateProfileReset: null,

    updateUserRequest: ['user'],
    updateUserSuccess: ['user'],
    updateUserFailure: ['error'],
    updateUserReset: null,

    createProfileRequest: ['user'],
    createProfileSuccess: ['user'],
    createProfileFailure: ['error'],
    createProfileReset: null
})
export default Creators