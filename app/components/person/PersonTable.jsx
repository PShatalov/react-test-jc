import React from 'react';
import {Input, Row, Col, Button, Panel} from 'react-bootstrap'
import Checkbox from '../common/Checkbox.jsx'
import PersonActions from '../../actions/PersonActions.js'
import PersonRow from './PersonRow.jsx'
import FilterContainer from '../filter/FilterContainer.jsx'
class PersonTable extends React.Component {
    constructor(...v){
        super(...v)
        this.state = {
            roles: PersonActions.getRoles()
        }
    }
    render() {
        let panelHeader = <Row style={{padding: '10px'}}>
            <Col md={3}>Name</Col>
            {
                this.state.roles.map((role, index) => (
                    <Col key={role.title+index} md={2}>{role.title}</Col>
                ))
            }
            <Col md={3}>Delete</Col>
        </Row>
        return (
            <Panel bsStyle={'primary'} header={panelHeader}>
                {
                    this.props.persons.map((person, index) => (
                        <PersonRow key={person['title']} index={index} {...this.props} person={person} />
                    ))
                }
                <Row style={{padding: '10px'}}>
                    <Col md={7}>
                        <FilterContainer roles={this.state.roles} />
                    </Col>
                </Row>
            </Panel>
        );
    }
}

export default PersonTable;