import React, {Component, useEffect, useState} from 'react';
import {Row, Col} from "react-bootstrap";
import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";

// Redux Toolkit
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts} from "../store/productList";

function HomeScreen() {
    const products = useSelector((state) => state.productList.products)
    const error = useSelector((state) => state.productList.error)
    const loading = useSelector((state) => state.productList.loading)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])


    return (
        <div>
            <h1>Latest products</h1>
            {
                loading ? <Loader/>
                    : error ? <Message message={error}/>
                        : <Row>
                            {products.map(item => (
                                <Col key={item.id} sm={12} md={6} lg={4} xl={3}>
                                    <Product product={item}/>
                                </Col>
                            ))}
                        </Row>
            }
        </div>
    );
}

export default HomeScreen;