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

    getRunsRequest: null,
    getRunsSuccess: ['runs'],
    getRunsFailure: null,

    createRunRequest: ['run'],
    createRunSuccess: ['run'],
    createRunFailure: ['error'],
    createRunReset: null,

    removeRunRequest: ['id'],
    removeRunSuccess: ['id'],
    removeRunFailure: ['error'],

    updateProfileRequest: ['user'],
    updateProfileSuccess: ['user'],
    updateProfileFailure: ['error'],
    updateProfileReset: null,

    createProfileRequest: ['user'],
    createProfileSuccess: ['user'],
    createProfileFailure: ['error'],
    createProfileReset: null
})
export default Creators