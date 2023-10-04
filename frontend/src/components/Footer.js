import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap'

class Footer extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col className="py-3 text-center">
                            Copyright &copy; ProShop
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Footer;