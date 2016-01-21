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
        this.removePerson = this.removePerson.bind(this)
        this.renderCheckboxes = this.renderCheckboxes.bind(this)

    }
    removePerson(){
        this.props.removePerson(this.props.index)
        this.changeShowRemove(false)
    }
    changeShowRemove(display){
        this.setState({
            showRemove: display
        })
    }
    renderCheckboxes(){
        let icons = []
        let person = this.props.person


        Object.keys(person).map((key, index) => {
                if((key !== 'name') && PersonActions.checkRole(PersonActions.getRoles(), key)){
                    let icon
                    if(person[key]){
                        icon = <Col key={person['name']+index} md={2}><i className="mdi-action-done"></i></Col>
                    } else {
                        icon = <Col key={person['name']+index} md={2}><i className="mdi-content-clear"></i></Col>
                    }

                    icons.push(
                        icon
                    )
                }
        })
        return icons
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
        let checkboxes = this.renderCheckboxes()

        return (
              <Panel style={panelStyle}>
              <Row>
                  <Col md={2}>
                      {this.props.person['name']}
                  </Col>
                  {checkboxes}
                    <Col md={3}>
                        {
                            (this.state.showRemove)
                                ? <Row>
                                    <Col md={6}>
                                        <Button style={buttonMargin} className="btn-sm btn-flat btn-info" onClick={this.removePerson}>Confirm</Button>
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