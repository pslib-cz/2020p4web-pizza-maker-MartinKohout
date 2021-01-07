import React, {useContext} from 'react';
import { DispatchContext, StateContext} from '../providers';
import {ListGroupItem, Button, Col, Row} from "reactstrap";
import {REMOVESELECTEDINGREDIENT, SELECTINGREDIENT} from '../reducers/actionTypes';

function IngredientOrder({ingredient}){
    const dispatch = useContext(DispatchContext);
    const state = useContext(StateContext);
    
    function renderButton(){
        if(ingredient.allowed){
            return <Button outline
            onClick={() => handleSelect()}>Select</Button>;
       }
       else{
        return  <Button outline color="danger" 
        onClick={() => dispatch({type: REMOVESELECTEDINGREDIENT, payload: ingredient})}>Remove</Button>;
       }
    }
    function handleSelect(){
            if(state.order.selectedIngredients.length > 3) 
            {
                alert("You can choose max. of 4 ingredients!");
            }
            else{
                dispatch({type: SELECTINGREDIENT, payload: ingredient});
            }
    }

    return(
        <ListGroupItem>
            <Row>
                <Col>{ingredient.name}</Col>
                <Col>
                    {renderButton()}
                   
                </Col>
            </Row>
        </ListGroupItem>    
    );
}

export default IngredientOrder;