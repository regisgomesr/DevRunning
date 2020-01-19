import React, { Component } from 'react'
import ActionCreators from '../../redux/actionCreators'
import { connect } from 'react-redux'
import { Table, Button } from 'semantic-ui-react'

class Runs extends Component{
    componentDidMount(){
        this.props.load()
    }

    renderRun(run) {
        return(
            <Table.Row>
                <Table.Cell>
                  {run.friendly_name}      
                </Table.Cell>
                <Table.Cell>
                  {run.duration}      
                </Table.Cell>
                <Table.Cell>
                  {run.distance}      
                </Table.Cell>
                <Table.Cell>
                  {run.created}      
                </Table.Cell>
            </Table.Row>
        )
    }

    render(){

        const run = {
            friendly_name: 'Run de Domingo Ze', 
            duration: '00:25:00', 
            distance: 3000, 
            created: '2020-01-19 09:30:00'
        }

        return (
            <div>
                <h1>Corridas</h1>
                <Button onClick={() => this.props.create(run)}>Criar corrida</Button>
                <Table celled>
                    <Table.Header>
                        <Table.HeaderCell>Nome</Table.HeaderCell>
                        <Table.HeaderCell>Duração</Table.HeaderCell>
                        <Table.HeaderCell>Distância</Table.HeaderCell>
                        <Table.HeaderCell>Data</Table.HeaderCell>
                    </Table.Header>
                    <Table.Body>
                        { this.props.runs.data.map(this.renderRun) }
                    </Table.Body>
                </Table>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        runs: state.runs
    }
}

const mapDispatchToProps = dispatch => {
    return {
        load: () => dispatch(ActionCreators.getRunsRequest()),
        create: (run) => dispatch(ActionCreators.createRunRequest(run))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Runs)