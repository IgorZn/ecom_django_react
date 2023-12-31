import React, {Component, useEffect, useState} from 'react';
import {Button, Row, Col} from 'react-bootstrap';

import {useDispatch, useSelector} from "react-redux";
import {addQtyCart, removeQtyCart, getLocalStorage} from "../store/productList";
import {useLocalStorage} from "../hooks/useLocalStorage";
import {addQtyAndGetReadyStore, getQtyInitValue} from "../utils/cartUtils";


export const Qty = ({productCount, id, localStoreQty}) => {
    const dispatch = useDispatch()
    const {cartQty} = useSelector(state => state.productList)

    // Local Storage
    const [qty, setQty] = useLocalStorage([], 'qty')

    const qtyCount = getQtyInitValue(qty, id)
    let [count, setCount] = useState(cartQty[id] || qtyCount[id] || 0)

    useEffect(() => {
        const q = addQtyAndGetReadyStore(id, qty, count)
        setQty(q)
    }, [count]);

    useEffect(() => {
        return () => {
            const q = addQtyAndGetReadyStore(id, qty, count)
            dispatch(getLocalStorage({q}))
        }
    }, [qty]);


    const addQty = ({id, count}) => {
        dispatch(addQtyCart({id, qty: count}))
    }

    const decrQty = ({id, count}) => {
        dispatch(removeQtyCart({id, qty: count}))
    }

    const addCount = () => {
        if (count === productCount.count_in_stock) {
            count = productCount.count_in_stock
        } else {
            count += 1
            setCount(count)
            addQty({id, count})
        }
    }

    const getCount = () => {
        if (count === 0) {
            count = 0
        } else {
            count -= 1
            setCount(count)
            decrQty({id, count})
        }
    }

    return (
        <div>
            <Row className="mt-3">
                <Col md={"2"}>
                    <Button variant="outline-primary"
                            className={"p-2"}
                            onClick={() => getCount()}>-</Button>
                </Col>
                <Col className="p-0 mx-3" md={"2"}>
                    <div className="mt-3 d-flex justify-content-center qty">
                        {count >= 0 ? count : 0}
                    </div>
                </Col>
                <Col md={"2"}>
                    <Button className="mr-auto p-2"
                            variant="outline-primary"
                            onClick={() => addCount()}>+</Button>
                </Col>
            </Row>
        </div>
    );

}
