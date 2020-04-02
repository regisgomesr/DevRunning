import React from 'react'
import { connect } from 'react-redux'

const Home = props => {

    return (
        <h1>Olá, Administrador {props.auth.user.name}.</h1>
    )
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
  }

export default connect(mapStateToProps)(Home)