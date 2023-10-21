import React from 'react';
import {Link} from "react-router-dom";
import {Row, Col, ListGroup, Image, Form, Button, Card} from "react-bootstrap";
import Message from "../components/Message";
import Loader from "../components/Loader";
import {useDispatch, useSelector} from "react-redux";
import {Qty} from "../components/Qty";
import {useLocalStorage} from "../hooks/useLocalStorage";


const CartScreen = () => {
    // Redux
    const dispatch = useDispatch()
    const {error, loading} = useSelector(state => state.productList)

    const addQty = (items, qty) => {
        if (items) {
            items.forEach(item => {
                const itemId = String(item.id)
                if (qty.find(q => Object.keys(q).includes(itemId))) {
                    const productQtyObj = qty.find(q => Object.keys(q).includes(itemId))
                    item.qty = productQtyObj[itemId]
                }
            })
            return items
        }
        return []
    }
    const cartData = JSON.parse(localStorage.getItem('order'))
    const cartQty = JSON.parse(localStorage.getItem('qty'))
    const cartItems = addQty(cartData, cartQty)

    return (
        <Row>
            <Col md={12}>
                <h1>Shopping Cart</h1>
                {cartItems.length === 0 ? (
                    <Message message={'Your cart is empty'} variant='info' extra={<Link to='/'>Go Back</Link>}>
                    </Message>
                ) : (
                    <ListGroup variant='flush'>
                        {cartItems.map( (item, index) => (
                            <ListGroup.Item key={index}>
                                <Row>
                                    <Col md={2}>
                                        <Image src={item.image} alt={item.name} fluid rounded></Image>
                                    </Col>
                                    <Col md={3}>
                                        <Link to={`/product/${item.id}`}>{item.name}</Link>
                                    </Col>
                                    <Col md={2}>
                                        ${item.price}
                                    </Col>
                                    <Col md={3}>
                                        <Qty productCount={item} id={item.id}/>
                                    </Col>


                                </Row>

                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                )}
            </Col>
            <Col md={4}>

            </Col>
        </Row>
    );
};

export default CartScreen;
