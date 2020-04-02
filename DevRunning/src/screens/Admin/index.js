import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import Header from './elements/Header'
import Home from './Home'
import Runs from './Runs'
import Users from './Users'
import EditUser from './EditUser'


const Admin = props => {

    if(!props.auth.isAuth){
        return <Redirect to='/login' />
    }
    if(props.auth.user.role !== 'admin') {
        return <Redirect to='/restrito' />
    }

    return(

        <div>
            <Header />
            <Route path={`${props.match.path}/`} exact component={Home} />
            <Route path={`${props.match.path}/users/:id/edit`} exact component={EditUser} />
            <Route path={`${props.match.path}/users`} exact component={Users} />
            <Route path={`${props.match.path}/runs`} component={Runs} />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        auth: state.auth,
        user: state.user
    }
}

export default connect(mapStateToProps)(Admin)