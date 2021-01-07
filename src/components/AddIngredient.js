import React, {useState, useContext} from 'react';
import {Form, Col, Button, Input, Row} from "reactstrap";

import {ADDINGREDIENT} from '../reducers/actionTypes';
import { DispatchContext} from '../providers';

function AddIngredient(){
    const dispatch = useContext(DispatchContext);
    const [inputV, setInputV] = useState('');
    const [inputCategory, setInputCategory] = useState('');
    function dispatchIngredient(){
        let newIngredient = { name: inputV, category: inputCategory, allowed: true }
        dispatch({type: ADDINGREDIENT, payload: newIngredient})
        setInputV('')
    }
    return(
        <Form onSubmit={e =>{e.preventDefault()
            dispatchIngredient()
        }} >
            <Row>
                <Col xs="5">
                <Input value={inputV} onChange={e => setInputV(e.target.value)} type="text" name="text" id="textInput" placeholder="Enter name" />
                </Col>
                <Col xs="4">
                <Input value={inputCategory} onChange={e => setInputCategory(e.target.value)} type="text" name="text" id="textInput" placeholder="Enter category" />
                </Col>
                <Col xs="3"> <Button 
                onClick={() => dispatchIngredient()}>Add</Button>
                </Col>
            </Row>
        </Form>
    );
}

export default AddIngredient;