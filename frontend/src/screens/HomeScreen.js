import React, {Component, useEffect, useState} from 'react';
import {Row, Col} from "react-bootstrap";
import Product from "../components/Product";
import Loader from "../components/Loader";
import {useDispatch, useSelector} from "react-redux";
import {listProducts} from "../redux/actions/productActions";
import Message from "../components/Message";


function HomeScreen() {
    const [productsState, setProduct] = useState([]);

    const dispatch = useDispatch()
    const productList = useSelector(state => state.productsList)
    const {error, loading, products} = productList

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <div>
            <h1>Latest products</h1>

            {
                loading ? <Loader />
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