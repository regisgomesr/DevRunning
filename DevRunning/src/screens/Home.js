import React from 'react'
import Header from '../Header'
import { Image, Segment } from 'semantic-ui-react'

const logoHome = '/logo-home.png'

const Home = props => {
    return(
        <div>
            <Header />
            <Segment>   
                <h1>Seja bem-vindo!</h1>
                <Image src={logoHome} size='medium' centered />
            </Segment>
        </div>
    )
}

export default Home