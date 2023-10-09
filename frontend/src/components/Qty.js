import React, {Component, useState} from 'react';
import {Button, Row, Col} from 'react-bootstrap';

import {useDispatch, useSelector} from "react-redux";
import {addQtyCart, removeQtyCart} from "../redux/actions/productActions";


export const Qty = ({productCount, id}) => {
    let [count, setCount] = useState(0)


    const dispatch = useDispatch()
    const cartQty = useSelector(state => state.cartQty)

    const addQty = (qty) => {
        dispatch(addQtyCart(qty))
    }

    const addCount = () => {
      if (count === productCount) {
          count = productCount
      } else {
          setCount(count + 1)
          addQty({qty: 1, id})
      }
    }

    const getCount = () => {
      if (count === 0) {
          count = 0
      } else {
          setCount(count - 1)
      }
    }

    return (
        <div>
            <Row className="mt-3">
                <Col><Button variant="outline-primary"
                             onClick={() => getCount()}>-</Button></Col>
                <Col className="p-0 mx-3">
                    <div className="mt-3 d-flex justify-content-center qty">
                        {count >= 0 ? count : 0}
                    </div>
                </Col>
                <Col>
                    <Button className="mr-3" variant="outline-primary"
                            onClick={() => addCount()}>+</Button>
                </Col>
            </Row>
        </div>
    );

}
