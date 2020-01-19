import React, { Component } from 'react'
import ActionCreators from '../../redux/actionCreators'
import { connect } from 'react-redux'

class Runs extends Component{
    componentDidMount(){
        this.props.load()
    }

    renderRun(run) {
        return(
            <tr>
                <td>
                  {run.friendly_name}      
                </td>
                <td>
                  {run.duration}      
                </td>
                <td>
                  {run.distance}      
                </td>
                <td>
                  {run.created}      
                </td>
            </tr>
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
                <h1>Runs</h1>
                <button onClick={() => this.props.create(run)}>Create Run</button>
                <table>
                    { this.props.runs.data.map(this.renderRun) }
                </table>
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