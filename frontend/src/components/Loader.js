import React, {Component} from 'react';
import {Spinner} from "react-bootstrap";

class Loader extends Component {
    render() {
        return (
            <div>
                <Spinner animation="border" role="status" style={{
                    margin: "auto",
                    display: "block",
                    height: "100px",
                    width: "100px"
                }}>
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        );
    }
}

export default Loader;