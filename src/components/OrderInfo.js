import React, {useContext, useEffect} from 'react';
import SelectedList from './SelectedList';
import { StateContext} from '../providers';
import { Row, Col } from 'reactstrap';

// už jsem an tohle líny :)

function OrderInfo(){
    const state = useContext(StateContext);
    const source = state.order.type.toString() === "Pizza" ? "../pizzaIcon.npg" : "../calzoneIcon.png";
    const foodName = state.order.type.toString();
    return(
        <div>
      
            <Row style={{marginTop: '10px'}}>
          
                <Col></Col>
                <Col>  
                <h1  className="font-weight-light">Your Order</h1>
                
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <Col></Col>
                <Col><img style={{width: '250px'}} alt="choosen food icon" src={source}/></Col>
                <Col></Col>
           
            </Row>
           
            <h3  className="font-weight-light" style={{marginTop: '10px'}}>Selected Ingredients</h3>
            <hr></hr>
            <SelectedList/>
        </div>
    );
}

export default OrderInfo;