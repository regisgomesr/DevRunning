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

    createRunRequest: ['run'], // 'friendly_name', 'duration', 'distance', 'created'
    createRunSuccess: ['run'],
    createRunFailure: ['error'],

    updateProfileRequest: ['user'],
    updateProfileSuccess: ['user'],
    updateProfileError: ['error'],

    updateProfileReset: null
})
export default Creators