import React, {useContext} from 'react';
import {ListGroup} from "reactstrap";

import Ingredient from './Ingredient';
import IngredientOrder from './IngredientOrder';
import {StateContext} from '../providers';

function List({renderBasic}){
    const state = useContext(StateContext);
    const list = state.ingredients; 
    let previousItem = '';

    function renderBasicList(){
        return list.map ((item, index) => {
            if(item.category !== previousItem){
                previousItem = item.category;
                return(
                    <>
                    <h2  className="font-weight-light" style={{marginTop: '10px'}}>{item.category}</h2> 
                    <Ingredient key={index} ingredient={item}/>
                     </>
                )
            }
            
            return (
                <Ingredient key={index} ingredient={item}/>
            );
        });
    }
    function renderOrderList(){
        return list.map ((item, index) => {
            if(item.category !== previousItem && item.allowed){
                previousItem = item.category;
                return( 
                <>
                <h2  className="font-weight-light">{item.category}</h2> 
                <IngredientOrder key={index} ingredient={item}/>
                 </>
                 )
            }
            if(item.allowed){
                return (
                    <IngredientOrder key={index} ingredient={item}/>
                );
            }
           return null;
        });
    }
    if(list.length < 1){
        return <h2>List is empty :(</h2>;
    }
    if(renderBasic){ //renders /ingredients components
        return(
        
            <ListGroup>
                {renderBasicList()}
            </ListGroup>
        );
    }  
    return( //renders /ingredients components
        <ListGroup>
            {renderOrderList()}
        </ListGroup>
    );
    
}

export default List;