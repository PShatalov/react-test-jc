import React from 'react';
import {Col} from 'react-bootstrap'
import PersonActions from '../../actions/PersonActions.js'
import PersonStore from '../../stores/PersonStore'
class FilterContainer extends React.Component {
    constructor(...v){
        super(...v)
        this.state = {
            roles: PersonActions.getRoles(),
            appliedFilter: PersonStore.getState().appliedFilter
        }
        this.storeChange = this.storeChange.bind(this)
    }
    componentDidMount() {
        PersonStore.listen(this.storeChange);
        //PersonStore.listen(this.onFilterComplete);
    }

    componentWillUnmount() {
        PersonStore.unlisten(this.storeChange);
    }
    storeChange(){
        let appliedfilter = PersonStore.getState().appliedFilter
        this.setState({
            appliedFilter: appliedfilter
        })
    }
    render() {
        let role = this.props.role
        return (
            <Col md={role.md} style={{paddingRight: 0}}>
                {
                    (role.key == this.state.appliedFilter)
                    ? role.title
                    :<a onClick={() => {PersonActions.applyFilter(role.key)}} href={'#'+role.key} >{role.title}</a>
                }
            </Col>
        );
    }
}

export default FilterContainer;