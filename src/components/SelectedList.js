import React, {useContext} from 'react';
import {ListGroup} from "reactstrap";

import IngredientOrder from './IngredientOrder';
import {StateContext} from '../providers';

function SelectedList(){
    const state = useContext(StateContext);
    const list = state.order.selectedIngredients; 
  
    
    function renderOrderList(){
        return list.map ((item, index) => {
            return (
                <>
                <h4  className="font-weight-light">{item.category}</h4>
                <IngredientOrder key={index} ingredient={item}/>
                </>
            );
        });
    }
    if(list.length < 1){
        return <h2   className="font-weight-light">Nothig selected yet.</h2>;
    }
   
    return(
        <ListGroup>
            {renderOrderList()}
        </ListGroup>
    );
    
}

export default SelectedList;