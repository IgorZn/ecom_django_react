import React, {Component} from 'react';
import {Alert} from "react-bootstrap";

class Message extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const message = this.props.message
        return (
            <div>
                <Alert key="warning" variant="warning">
                    {message}
                </Alert>
            </div>
        );
    }
}

export default Message;