import { createActions } from 'reduxsauce'

export const {
    Types,
    Creators
} = createActions({
    // verificando se usuario conseguiu logar ou nao
    signinRequest: ['email', 'passwd'],
    signinSuccess: ['user'],
    signinFailure: ['error'],

    // Verificando se usuario ta logado ou nao
    authRequest: null,
    authSuccess: ['user'] ,
    authFailure: null
})
export default Creators