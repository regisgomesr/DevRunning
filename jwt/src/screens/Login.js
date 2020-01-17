import React, { Component } from 'react'

import ActionCreator from '../redux/actionCreators'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Login extends Component {

    state = {
        form: {
            email: '',
            passwd: ''
        }
    }

    // Funcao generica que serve para todos os campos inputs do meu form
    handleChange = fieldname => event => {
        //console.log(fieldname, event.target.value)
        const form = {
            ...this.state.form
        }
        form[fieldname] = event.target.value
        this.setState({ form })
    }

    login = () => {
        const { email, passwd } = this.state.form
        this.props.login(email, passwd)
    }

    render() {
        if(this.props.auth.isAuth){
            if(this.props.auth.user.role === 'admin') {
                return <Redirect to='/admin'/>
            }
            return <Redirect to='/restrito' />
        }
        
        return(
            <div>
                <h1>Login {JSON.stringify(this.props)}</h1>
                <input type='text' value={this.state.form.email} onChange={this.handleChange('email')} />
                <input type='password' value={this.state.form.passwd} onChange={this.handleChange('passwd')} />
                <button onClick={this.login}>Logar</button>

                {
                    this.props.auth.error && 
                        <p>Erro ao logar!</p>
                }

            </div>
        )
    }
}

// conectando login ao redux
const mapStateToProps = state => {
    return {
        // recebendo tru/false se o usuario esta logado ou nao
        auth: state.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (email, passwd) => dispatch(ActionCreator.signinRequest(email, passwd))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login) 