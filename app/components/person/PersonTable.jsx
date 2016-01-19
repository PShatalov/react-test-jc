import React from 'react';
import {Input, Row, Col} from 'react-bootstrap'
import Checkbox from '../common/Checkbox.jsx'
import PersonActions from '../../actions/PersonActions.js'

class PersonTable extends React.Component {
    constructor(...v){
        super(...v)
        this.state = {
            roles: PersonActions.getRoles()
        }

    }
    render() {
        console.log(this.state.roles)
        //this.props.persons.map((person, index) => (
        //    Object.keys(person).map(key => (
        //        console.log(key !== 'name'))
        //    ) )
        //)

        return (
            <div>
                <Row>
                    <Col md={2}>Name</Col>
                    {
                        this.state.roles.map(role => (
                            <Col md={2}>{role.title}</Col>
                        ))
                    }
                    <Col md={2}>Delete</Col>
                </Row>
                {
                    this.props.persons.map((person, index) => (
                        <Row>
                        {Object.keys(person).map(key => (
                            <Col md={2}>
                                {(key !== 'name') ? <Checkbox defaultChecked={person[key]} /> : person[key]}
                            </Col>
                        ))}
                            <Col md={2}><i onClick={() => this.props.removePerson(index)} style={{cursor: 'pointer'}} className="mdi-action-delete"></i></Col>
                        </Row>
                    ))
                }
            </div>
        );
    }
}

export default PersonTable;