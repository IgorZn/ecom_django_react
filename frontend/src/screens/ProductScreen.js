import React, {Component, useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import {Row, Col, Image, ListGroup, Button, Card} from "react-bootstrap";

// My hooks
import {useLocalStorage} from "../hooks/useLocalStorage";

/* My Components */
import Rating from "../components/Rating";
import Loader from "../components/Loader";
import Message from "../components/Message";
import {Qty} from "../components/Qty";

// Redux
import {useDispatch, useSelector} from "react-redux";
import {fetchSingleProduct} from "../store/productList";
import {addQtyAndGetReadyStore, addToCartStatus, getQtyInitValue, useButtonStatus} from "../utils/cartUtils";


function ProductScreen() {
    /* Get id from URL*/
    let {id} = useParams();
    const navigate = useNavigate();

    // Local Storage
    const [order, setOrder] = useLocalStorage([], 'order')
    const [qty, setQty] = useLocalStorage([], 'qty')
    const qtyCountLS = getQtyInitValue(qty, id)
    const [btnValue, setBtnStatus ] = useButtonStatus(qtyCountLS, id)

    // Redux
    const dispatch = useDispatch()
    const {product, error, loading, cartQty} = useSelector(state => state.productList)

    useEffect(() => {
        dispatch(fetchSingleProduct(id))
    }, [])

    useEffect(() => {
        setBtnStatus(qtyCountLS[id] > 0 ? false : true)
        setBtnStatus(cartQty[id] > 0 ? false : true)
    }, [cartQty]);


    const addToCartHandler = (id) => {
        const newItem = order.find(item => item.id === Number(id))

        if (!newItem) {
            setOrder([...order, product])
        }

        setTimeout(navigate, 50, `/cart/${id}?qty=`)

    }

    /* Find over array product that match with id from URL and set to `product` */
    return (

        <div>
            <Link to="/" className="btn btn-light my-3">Go Back</Link>
            {
                loading ? <Loader/>
                    : error ? <Message message={error} variant='info'/>
                        : (
                            <Row>
                                <Col md="6">
                                    <Image src={product.image} alt={product.name} fluid></Image>
                                </Col>
                                <Col md="3">
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>
                                            <h3>{product.name}</h3>
                                        </ListGroup.Item>

                                        <ListGroup.Item>
                                            <Rating value={product.rating} text={`${product.num_reviews} reviews`}
                                                    color={'#f8e825'}/>
                                        </ListGroup.Item>

                                        <ListGroup.Item>
                                            Price: ${product.price}
                                        </ListGroup.Item>

                                        <ListGroup.Item>
                                            {product.description}
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Col>

                                <Col md="3">
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>
                                            <Row>
                                                <Col>Price:</Col>
                                                <Col><strong>${product.price}</strong></Col>
                                            </Row>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <Row>
                                                <Col>Status:</Col>
                                                <Col>{product.count_in_stock > 0 ? 'In stock' : 'Out of stock'}</Col>
                                            </Row>
                                        </ListGroup.Item>
                                        {product.count_in_stock > 0 ?
                                            <Qty productCount={product} id={id}/> : ''}

                                        <ListGroup.Item className="d-grid">
                                            <Button className="btn-block"
                                                    type="button"
                                                    onClick={() => addToCartHandler(id)}
                                                    disabled={btnValue}>
                                                Add to Cart</Button>
                                        </ListGroup.Item>

                                    </ListGroup>
                                </Col>
                            </Row>
                        )
            }

        </div>
    )
}

export default ProductScreen;