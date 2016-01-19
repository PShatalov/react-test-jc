import React from 'react';
import {Input, Button, Panel, Row, Col} from 'react-bootstrap'

class Home extends React.Component {
    render() {
        return (
            <Row>
                <Col md={6}>
                    <Panel>
                        <h2>Hello</h2>
                        <Input type="text" />
                        <Button className="btn btn-raised btn-primary">Test</Button>
                    </Panel>
                </Col>
            </Row>
        );
    }
}

export default Home;