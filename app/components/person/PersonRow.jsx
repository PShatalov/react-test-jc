import React from 'react';
import {Input, Row, Col, Button, Panel} from 'react-bootstrap'
import Checkbox from '../common/Checkbox.jsx'
import PersonActions from '../../actions/PersonActions.js'

class PersonRow extends React.Component {
    constructor(...v){
        super(...v)
        this.state = {
            showRemove: false
        }
        this.changeShowRemove = this.changeShowRemove.bind(this)

    }
    changeShowRemove(display){
        this.setState({
            showRemove: display
        })
    }
    render() {
        let person = this.props.person
        let panelStyle = {
            marginBottom: '3px',
            padding: '10px'
        }
        let buttonMargin = {
            margin: '0'
        }
        return (
              <Panel style={panelStyle}>
              <Row>
                  {Object.keys(person).map(key => (
                    <Col md={2}>
                        {(key !== 'name') ? <Checkbox defaultChecked={person[key]} /> : person[key]}
                    </Col>
                  ))}
                    <Col md={2}>
                        {
                            (this.state.showRemove)
                                ? <Row>
                                    <Col md={6}>
                                        <Button style={buttonMargin} className="btn-sm btn-flat btn-info" onClick={() => this.props.removePerson(this.props.index)}>Confirm</Button>
                                    </Col>
                                    <Col md={6}>
                                        <Button style={buttonMargin} className="btn-sm btn-flat btn-info" onClick={() => this.changeShowRemove(false)}>Cancel</Button>
                                    </Col>
                                </Row>
                                : <i
                                onClick={() => this.changeShowRemove(true)}
                                style={{cursor: 'pointer'}}
                                className="mdi-action-delete">
                            </i>
                        }
                    </Col>
              </Row>
              </Panel>
        );
    }
}

export default PersonRow;