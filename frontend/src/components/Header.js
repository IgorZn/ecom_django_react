import React, {Component} from 'react';
import {Nav, Navbar, Row, Container} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap';

class Header extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Container>
                        <LinkContainer to="/">
                            <a className="navbar-brand">ProShop</a>
                        </LinkContainer>

                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <LinkContainer to="/cart">
                                        <a className="nav-link">
                                            <i className="fas fa-shopping-cart m-1"></i>
                                            Cart</a>
                                    </LinkContainer>
                                </li>
                                <li className="nav-item">
                                    <LinkContainer to="/login">
                                        <a className="nav-link">
                                            <i className="fas fa-user m-1"></i>
                                            Login</a>
                                    </LinkContainer>
                                </li>
                                {/*<li className="nav-item">*/}
                                {/*    <a className="nav-link disabled" href="#">Disabled</a>*/}
                                {/*</li>*/}
                            </ul>
                        </div>

                    </Container>
                </nav>
            </header>
        );
    }
}

export default Header;