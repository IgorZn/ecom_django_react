import React, {Component} from 'react';
import {Alert} from "react-bootstrap";

class Message extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const message = this.props.message
        const variant = this.props.variant
        const extra = this.props.extra
        return (
            <div>
                <Alert key={variant} variant={variant}>
                    {message} {extra}
                </Alert>
            </div>
        );
    }
}

export default Message;