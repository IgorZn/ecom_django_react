import React, {Component, useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import {Row, Col, Image, ListGroup, Button, Card} from "react-bootstrap";

/* My Components */
import Rating from "../components/Rating";
import {useDispatch, useSelector} from "react-redux";
import {listDetails, listProducts} from "../redux/actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Product from "../components/Product";


function ProductScreen() {
    /* Get ID from URL*/
    let {id} = useParams();
    const dispatch = useDispatch()
    const productDetails = useSelector(state => state.productDetails)
    const {error, loading, product} = productDetails

    useEffect(() => {
        dispatch(listDetails(id))
    }, [dispatch, id])


    /* Find over array product that match with ID from URL and set to `product` */
    return (

        <div>
            <Link to="/" className="btn btn-light my-3">Go Back</Link>
            {
                loading ? <Loader/>
                    : error ? <Message message={error}/>
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
                                        <ListGroup.Item>
                                            <Button className="btn-block" type="button"
                                                    disabled={product.count_in_stock == 0}>
                                                Add to Cart</Button>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Col>
                            </Row>
                        )
            }


        </div>
    )
        ;
}

export default ProductScreen;