import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {Row, Col, ListGroup, Image, Form, Button, Card} from "react-bootstrap";
import Message from "../components/Message";
import Loader from "../components/Loader";
import {useDispatch, useSelector} from "react-redux";
import {Qty} from "../components/Qty";


const CartScreen = () => {
    // Redux
    const dispatch = useDispatch()
    const {error, loading, cartQty, qtyCartLocal} = useSelector(state => state.productList)

    const addQty = (items, qty) => {
        if (items) {
            items.forEach(item => {
                const itemId = item.id.toString()
                if (qty.find(q => Object.keys(q).includes(itemId))) {
                    const productQtyObj = qty.find(q => Object.keys(q).includes(itemId))
                    item.qty = productQtyObj[itemId]
                }
            })
            return items
        }
        return []
    }
    let cartData = JSON.parse(localStorage.getItem('order'))
    let cartQtyLocal = JSON.parse(localStorage.getItem('qty'))
    let cartItems = addQty(cartData, cartQtyLocal)

    const removeFromCartHandler = (id) => {
        console.log('removeFromCartHandler>>>', id)
    }


    return (
        <Row>
            <Col md={8}>
                <h1>Shopping Cart</h1>
                {cartItems.length === 0 ? (
                    <Message message={'Your cart is empty'} variant='info' extra={<Link to='/'>Go Back</Link>}>
                    </Message>
                ) : (
                    <ListGroup variant='flush'>
                        {cartItems.map((item, index) => (
                            <ListGroup.Item key={index}>
                                <Row>
                                    <Col md={"2"} className={"justify-content-md-center"}>
                                        <Image src={item.image} alt={item.name} fluid rounded></Image>
                                    </Col>
                                    <Col md={"2"} className={"mt-3"}>
                                        <Link to={`/product/${item.id}`}>{item.name}</Link>
                                    </Col>
                                    <Col md={"2"} className={"mt-3"}>
                                        ${item.price}
                                    </Col>
                                    <Col md={"4"}>
                                        <Qty productCount={item} id={item.id}/>
                                    </Col>
                                    <Col className={"justify-content-md-center mt-3 md-2"}>
                                        <Button
                                            type={"button"}
                                            variant={"light"}
                                            onClick={() => removeFromCartHandler(item.id)}
                                        ><i className={"fas fa-trash"}></i></Button>
                                    </Col>

                                </Row>

                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                )}
            </Col>
            <Col md={4}>
                <Card>
                    <ListGroup variant={"flush"}>
                        <ListGroup.Item>
                            <h2>Subtotal ()</h2>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    );
};

export default CartScreen;
