import React, {useContext, useEffect} from 'react';
import SelectedList from './SelectedList';
import { DispatchContext, StateContext} from '../providers';
import {SETFOODTYPE} from '../reducers/actionTypes';
import IngridienceList from './IngredientList';
import { Card, Button, CardHeader, CardFooter, CardBody,
    CardText, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

function Order({source, type}){
    const dispatch = useContext(DispatchContext);
    

    return(
        <div>
      
            <Row>
            <Col>
            <Card>
                <CardHeader >Selected ingredients</CardHeader>
                <CardBody style={{minHeight: '320px'}}>
                    <SelectedList/>
                </CardBody>
            </Card>
            </Col>
                <Col>
                    <Card>
                        <CardHeader>Choosen food</CardHeader>
                        <CardBody>
                            <CardText><img style={{width: '150px'}} alt="choosen food icon" src={source}/></CardText>
                        </CardBody>
                        <CardFooter>{type}</CardFooter>
                    </Card>
                    <Link 
                    className="btn btn-outline-secondary btn-lg"
                    style={{marginTop: '30px'}}
                    size="lg"
                    onClick={() => alert(`Your order has been placed.`) /*dispatch({type: SETFOODTYPE, payload: type})*/}
                      >Order your Food</Link>
                </Col>
                
            </Row>
            
            <h1  className="font-weight-light" style={{marginTop: '10px'}}>Select Ingredients</h1>
            <hr></hr>
            <IngridienceList renderBasic={false}/>
        </div>
    );
}

export default Order;