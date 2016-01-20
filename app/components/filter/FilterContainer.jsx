import React from 'react';
import {Input, Row, Col, Button, Panel} from 'react-bootstrap'
import PersonActions from '../../actions/PersonActions.js'
import Filter from './Filter.jsx'
class FilterContainer extends React.Component {
    constructor(...v){
        super(...v)
        //this.state = {
        //    roles: PersonActions.getRoles()
        //}
    }
    render() {
        let resetFilters = {
            key: 'reset',
            title: 'Reset Filters',
            md: 3
        }
        return (
            <Row>
                {this.props.roles.map((role, index) => (
                    <Filter role={role} />
                ))}
                <Filter role={resetFilters} />
            </Row>
        );
    }
}

export default FilterContainer;