import React from 'react';
import {Link} from "react-router-dom";
import {Row, Col, ListGroup, Image, Form, Button, Card} from "react-bootstrap";
import Message from "../components/Message";
import Loader from "../components/Loader";
import {useDispatch, useSelector} from "react-redux";


const CartScreen = () => {
    // Redux
    const dispatch = useDispatch()
    const {error, loading } = useSelector(state => state.productList)
    const addQty = (items, qty) => {
        items.forEach( item => {
            const itemId = String(item.id)
            if(qty.find(q => Object.keys(q).includes(itemId))) {
                const productQtyObj = qty.find(q => Object.keys(q).includes(itemId))
                item.qty = productQtyObj[itemId]
            }

        })
        return items
    }
    const storageData = JSON.parse(localStorage.getItem('order'))
    const cartQty = JSON.parse(localStorage.getItem('qty'))
    const cartItems = addQty(storageData, cartQty)
    console.log(cartItems)


    return (
        <div>
            <Link to="/" className="btn btn-light my-3">Go Back</Link>
            {
                loading ? <Loader/>
                    : error ? <Message message={error}/>
                        : (
                            'Cart'
                        )
            }
        </div>
    );
};

export default CartScreen;
