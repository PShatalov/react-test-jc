import React from 'react';
import {Input, Button, Panel, Row, Col} from 'react-bootstrap'
import Checkbox from './common/Checkbox.jsx'
import PersonActions from '../actions/PersonActions.js'
import PersonStore from '../stores/PersonStore.js'
import PersonTable from './person/PersonTable.jsx'

class Home extends React.Component {
    constructor(...v){
        super(...v)
        this.state = {
            roles: PersonActions.getRoles(),
            persons: (localStorage.getItem('persons') !== null) ? JSON.parse(localStorage.getItem('persons')) : []
        }

        this.addPerson = this.addPerson.bind(this)
        this.removePerson = this.removePerson.bind(this)
    }
    addPerson(){
        let formData = {
            name: this.refs.name.getValue(),
            //superpower: this.refs.superpower.getChecked(),
            //genius: this.refs.genius.getChecked(),
            //rich: this.refs.rich.getChecked()
        }
        this.state.roles.map(role => (
            formData[role.key] = this.refs[role.key].getChecked()
        ))
        let persons = this.state.persons
        persons.push(formData)
        this.setState({
            persons: persons
        })
        PersonActions.addPerson(persons)
    }
    removePerson(index){

        let persons = this.state.persons
        console.log('here', persons)
        persons.splice(index, 1)
        this.setState({
            persons: persons
        })
        PersonActions.addPerson(persons)
        console.log(persons)
    }
    render() {
        let contentPanel = {
            margin: '20px 0 0 20px',
            padding: '10px'
        }
        let sidebarPanel = {
            margin: '20px 0 0 0',
            padding: '10px'
        }
        let buttonMargin = {
            marginTop: '0'
        }
        let inputWidth = {
            width: '100%'
        }
        return (
            <Row>
                <Col md={8}>
                    <Panel style={contentPanel}>
                        <h2>Add New Person</h2>
                        <Row>
                            <Col md={4}>
                                <Input style={inputWidth} type="text" ref="name" />
                            </Col>
                            <Col md={5}>
                                <Row>
                                    {this.state.roles.map(role => (
                                        <Col md={role.md} >
                                            <Checkbox key={role.key} label={role.title} ref={role.key} />
                                        </Col>
                                    ))}
                                </Row>
                            </Col>
                            <Col md={3}>
                                <Button
                                    style={buttonMargin}
                                    onClick={this.addPerson}
                                    className="btn btn-raised btn-primary"
                                    placeholder="Person Name">
                                    {'Add'}
                                </Button>
                            </Col>
                        </Row>
                        {
                            (this.state.persons.length > 0)
                                ? <PersonTable removePerson={this.removePerson} persons={this.state.persons} />
                                : null
                        }
                    </Panel>
                </Col>
                <Col md={3}>
                    <Panel style={sidebarPanel}>
                        <h2>{'Total Persons: '+this.state.persons.length}</h2>
                        <h4>{'Super Power: '+PersonActions.getTypeCount(this.state.persons, 'superpower')}</h4>
                        <h4>{'Rich: '+PersonActions.getTypeCount(this.state.persons, 'rich')}</h4>
                        <h4>{'Genius: '+PersonActions.getTypeCount(this.state.persons, 'genius')}</h4>
                    </Panel>
                </Col>
            </Row>
        );
    }
}

export default Home;