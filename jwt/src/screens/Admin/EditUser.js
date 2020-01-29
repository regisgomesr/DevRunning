import React, { Component } from 'react'
import ActionCreators from '../../redux/actionCreators'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom' 
import { Button, Segment, Form } from 'semantic-ui-react'

class EditUser extends Component{

    state = {
        name: '',
        email: '',
        role: '',
        error: ''
    }

    componentDidMount() {
        this.props.reset()
        this.props.load(this.props.match.params.id)
    }

    // toda vez que o props é mudado esse get é chamado e posso setar outro valor para o state
    static getDerivedStateFromProps(newProps, prevState){

        // Se o usuario existir
        if(newProps.users && newProps.users.user) {
            const user = {}
            const newValue = newProps.users.user

            if(newValue.name !== prevState.name){
                user.name = newProps.users.user.name
            }

            if(newValue.email !== prevState.email){
                user.email = newProps.users.user.email
            }

            if(newValue.role !== prevState.role){
                user.role = newProps.users.user.role
            }

            return user
        }

        return null
    }

    handleChange = fieldname => event => {
        this.setState({
            [fieldname]: event.target.value
        })
    }

    handleSave = () => {

            this.props.save({
                id: this.props.match.params.id,
                name: this.state.name,
                email: this.state.email,
                role: this.state.role,
            })
        

       
    }

    render(){

        if(this.props.users.saved) {
            return <Redirect to='/admin/users' />
        }

        return (
            <div>
                <h1>Editar Usuário</h1>
                {
                    this.props.users.saved && <Segment color='green'>Usuário Alterado com sucesso!</Segment>
                }

                {
                    !this.props.users.saved && 
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
                            <label>Tipo:</label>
                            <select value={this.state.role} onChange={this.handleChange('role')}>
                                <option value='admin'>Administrador</option>
                                <option value='user'>Usuário</option>
                            </select>
                            
                        </Form.Field>

                            <Button onClick={this.handleSave}>Editar Usuário</Button>   
                    </Form>
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        save: user => dispatch(ActionCreators.updateUserRequest(user)),
        reset: () => dispatch(ActionCreators.updateUserReset()),
        load: id => dispatch(ActionCreators.getUserRequest(id))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUser)
