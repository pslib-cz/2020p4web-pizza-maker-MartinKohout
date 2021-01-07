import React, {useContext} from 'react';
import { DispatchContext} from '../providers';
import {ListGroupItem, Button, Col, Row} from "reactstrap";
import {DELETEINGREDIENT} from '../reducers/actionTypes';

function Ingredient({ingredient}){
    const dispatch = useContext(DispatchContext);
    return(
        <ListGroupItem style={{minWidth: '350px'}}>
            <Row>
                <Col>{ingredient.name}</Col>
                <Col>
                    <Button style={{marginTop: '5%'}} size="sm" outline color="danger" 
                    onClick={() => dispatch({type: DELETEINGREDIENT, payload: ingredient})}>Delete</Button>
                </Col>
            </Row>
        </ListGroupItem>    
    );
}

export default Ingredient;