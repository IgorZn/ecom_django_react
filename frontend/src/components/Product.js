import React, {Component} from 'react';
import {Card, Col} from "react-bootstrap";
import {Link} from 'react-router-dom';
import Rating from "./Rating";

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            count: 0
        }
    }

    componentDidMount() {
        document.title = `You clicked ${this.state.count} times`;
    }

    componentDidUpdate() {
        document.title = `You clicked ${this.state.count} times`;
    }

    render() {
        const item = this.props.product
        return (
            <Card className="my-3 p-3 rounded">
                <p>You clicked {this.state.count} times</p>
                <button onClick={() => this.setState({count: this.state.count + 1})}>
                    Click me
                </button>

                <Link to={`/product/${item.id}`} onClick={() => this.setState({count: this.state.count + 1})}>
                    <Card.Img src={item.image}/>
                </Link>
                <Card.Body>
                    <Link to={`/product/${item.id}`} onClick={() => this.setState({count: this.state.count + 1})}>
                        <Card.Title as="div">
                            <strong>{item.name}</strong>
                        </Card.Title>
                    </Link>
                    <Card.Text as="div">
                        <div className="my-3">
                            <Rating value={item.rating} text={`${item.num_reviews} reviews`} color={'#f8e825'}/>
                        </div>
                    </Card.Text>

                    <Card.Text as="h3">
                        <div className="my-3">
                            ${item.price}
                        </div>
                    </Card.Text>


                </Card.Body>
            </Card>
        );
    }
}

export default Product;