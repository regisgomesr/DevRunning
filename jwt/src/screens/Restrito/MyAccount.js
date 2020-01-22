import React, { Component } from 'react'
import ActionCreators from '../../redux/actionCreators'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'

import timezones from 'moment-timezone/data/meta/latest.json'

class MyAccount extends Component{

    state = {
        unit: '',
        timezone: ''
    }

    componentDidMount(){
        this.setState({
            unit: this.props.auth.user.unit,
            timezone: this.props.auth.user.timezone
        })
    }

    handleChange = fieldname => event => {
        this.setState({
            [fieldname]: event.target.value
        })
    }

    handleSave = () => {
        this.props.save({
            unit: this.state.unit,
            timezone: this.state.timezone,
            id: this.props.auth.user.id
        })
    }

    render(){
        return (
            <div>
                <h1>Minha Conta</h1>

                <select value={this.state.unit} onChange={this.handleChange('unit')}>
                    <option value='metric'>Métrico (Km)</option>
                    <option value='imperial'>Imperial (mi)</option>
                </select>

                <select value={this.state.timezone} onChange={this.handleChange('timezone')}>
                    {
                        Object
                            .keys(timezones.zones)
                            .map(tz => {
                                return <option key={tz} value={tz}>{tz}</option>
                            })
                    }
                </select>

                <Button onClick={this.handleSave}>Salvar</Button>
                
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
        save: (user) => dispatch(ActionCreators.updateProfileRequest(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyAccount)