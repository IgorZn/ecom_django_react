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


function ProductScreen() {
    /* Get id from URL*/
    let {id} = useParams();
    const navigate = useNavigate();

    // Local Storage
    const [order, setOrder] = useLocalStorage([], 'order')
    const [qty, setQty] = useLocalStorage([], 'qty')

    const q = JSON.parse(localStorage.getItem('qty'))

    // Redux
    const dispatch = useDispatch()
    const {product, error, loading, cartQty} = useSelector(state => state.productList)


    useEffect(() => {
        dispatch(fetchSingleProduct(id))
    }, [dispatch])

    const addToCartHandler = (id) => {
        const newItem = order.find(item => item.id === Number(id))

        if (!newItem) {
            setOrder([...order, product])
        }

        // Clean up from null
        const q = qty.filter(el => el !== null)

        // If already exist upd value (qty)
        q.forEach(el => {
            if (Object.keys(el).includes(id)) {
                el[id] = cartQty[id]
            }
        })
        const storeOut = [...q]
        for (const [key, val] of Object.entries(cartQty)) {
            // if new add to storeOut
            if (!storeOut.find(el => Object.keys(el).includes(key))) {
                storeOut.push(Object.fromEntries([[key, val]]))
            }
        }

        // Place to store
        setQty([...storeOut])

        setTimeout(navigate, 50, `/cart/${id}?qty=`)

    }

    /* Find over array product that match with id from URL and set to `product` */
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
                                        {product.count_in_stock > 0 ?
                                            <Qty productCount={product.count_in_stock} id={id}/> : ''}

                                        <ListGroup.Item className="d-grid">
                                            <Button className="btn-block"
                                                    type="button"
                                                    onClick={() => addToCartHandler(id)}
                                                    disabled={cartQty[`${id}`] == undefined || cartQty[`${id}`] == 0 ? true : false}>
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