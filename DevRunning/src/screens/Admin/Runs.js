import React, { Component } from 'react'
import ActionCreators from '../../redux/actionCreators'
import { connect } from 'react-redux'
import { Table, Button, Segment, Label, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import Distance from '../elements/Distance'
import Duration from '../elements/Duration'
import DateStr from '../elements/DateStr'


class Runs extends Component{
    componentDidMount(){
        this.props.load()
        console.log(this.props.auth)
    }

    renderRun = (run) => {
        console.log(run)
        return(
            <Table.Row key={run.id}>
                <Table.Cell>
                  {run.friendly_name}<br/>
                  <Label>{run.name}</Label>
                </Table.Cell>
                <Table.Cell>
                  <Duration duration={run.duration} />   
                </Table.Cell>
                <Table.Cell>
                  <Distance distance={run.distance} metric={this.props.auth.user.unit} />
                </Table.Cell>
                <Table.Cell>
                  <DateStr data={run.created} timezone={this.props.auth.user.timezone} />
                </Table.Cell>
                <Table.Cell>
                <Button inverted color='red' onClick={() => this.props.remove(run.id)}>Remover</Button>
                </Table.Cell>
            </Table.Row>
        )
    }

    render(){

        return (
            <div>
                <h1>Corridas</h1>

                <Button animated color='green' size='big' as={Link} to='/restrito/create-run'>
                    <Button.Content visible>Criar corrida</Button.Content>
                        <Button.Content hidden>
                        <Icon name='angle double right' />
                    </Button.Content>
                </Button>
                
                { this.props.runs.isLoading && <p>Carregando...</p> }

                {
                    !this.props.runs.isLoading && this.props.runs.data.length === 0 &&
                        <Segment color='blue'>Nenhuma Corrida Cadastrada!</Segment>
                }

                {
                    !this.props.runs.isLoading && this.props.runs.data.length > 0 && 
                
                    <Table celled>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Nome</Table.HeaderCell>
                                <Table.HeaderCell>Duração</Table.HeaderCell>
                                <Table.HeaderCell>Distância</Table.HeaderCell>
                                <Table.HeaderCell>Data</Table.HeaderCell>
                                <Table.HeaderCell>Ações</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            { this.props.runs.data.map(this.renderRun) }
                        </Table.Body>
                    </Table>
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        runs: state.runs,
        auth: state.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        load: () => dispatch(ActionCreators.getRunsRequest(true)),
        remove: id => dispatch(ActionCreators.removeRunRequest(id))
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Runs)