import React, { Component } from 'react'
import ActionCreators from '../redux/actionCreators'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom' 
import { Button, Segment, Form } from 'semantic-ui-react'

import timezones from 'moment-timezone/data/meta/latest.json'

import Header from '../Header'

class CreateAccount extends Component{

    state = {
        name: '',
        email: '',
        passwd: '',
        passwd2: '',
        unit: 'metric',
        timezone: 'America/Sao_Paulo',
        error: ''
    }

    componentDidMount() {
        this.props.reset()
    }

    handleChange = fieldname => event => {
        this.setState({
            [fieldname]: event.target.value
        })
    }

    handleSave = () => {

        if(this.state.passwd !== this.state.passwd2) {
            this.setState({
                error: 'equal'
            })
        }else if(this.state.passwd.length < 6){
            this.setState({
                error: 'length'
            })
        }else
            this.setState({
                error: ''
            })
            this.props.save({
                name: this.state.name,
                email: this.state.email,
                passwd: this.state.passwd,
                unit: this.state.unit,
                timezone: this.state.timezone
            })
        

       
    }

    render(){

        if(this.props.auth.isAuth) {
            return <Redirect to='/restrito' />
        }

        return (
            <div>
            {
                this.props.auth.error && <Segment color='red'>Erro - E-mail já existe!</Segment>
            }
                <Header />
                <h1>Criar Conta</h1>

                {JSON.stringify(this.props.auth)}

                {
                    this.state.error === 'equal' && <Segment color='red'>Erro - Senhas diferentes!</Segment>
                }

                {
                    this.state.error === 'length' && <Segment color='red'>Erro - A Senha deve conter no mínimo 6 caracteres!</Segment>
                }

                {
                    this.props.auth.saved && <Segment color='green'>Conta Criada com sucesso!</Segment>
                }

                {
                    !this.props.auth.saved && 
                    <Form>
                    <Form.Field>
                        <label>Nome:</label>
                        <input type='text' value={this.state.name} onChange={this.handleChange('name')} />
                    </Form.Field>

                    <Form.Field>
                        <label>E-mail:</label>
                        <input type='email' value={this.state.email} onChange={this.handleChange('email')} />
                    </Form.Field>

                        <Form.Field>
                            <label >Senha:</label>
                            <input type='password' value={this.state.passwd} onChange={this.handleChange('passwd')} />
                        </Form.Field>

                        <Form.Field>
                            <label>Digite Novamente:</label>
                            <input type='password' value={this.state.passwd2} onChange={this.handleChange('passwd2')} />
                        </Form.Field>
                        
                        <Form.Field>
                            <label>Unidade de Comprimento</label>
                            <select value={this.state.unit} onChange={this.handleChange('unit')}>
                                <option value='metric'>Quilômetros(Km)</option>
                                <option value='imperial'>Milhas(mi)</option>
                            </select>
                        </Form.Field>

                        <Form.Field>
                            <label>Fuso Horário</label>
                            <select value={this.state.timezone} onChange={this.handleChange('timezone')}>

                            {
                            Object
                                .keys(timezones.zones)
                                .map(tz => {
                                    return <option key={tz} value={tz}>{tz}</option>
                                })
                            }

                            </select>
                        </Form.Field>

                        <Button onClick={this.handleSave}>Criar Conta</Button>   
                    </Form>
                }
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        save: (user) => dispatch(ActionCreators.createProfileRequest(user)),
        reset: () => dispatch(ActionCreators.createProfileReset())

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount)
