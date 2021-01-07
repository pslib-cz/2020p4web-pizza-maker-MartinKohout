import React from 'react';
import { Row, Col } from 'reactstrap';

// components
import IngredientList from './IngredientList';
import AddIngredient from './AddIngredient';

function IngredientPage(){
    return(
        <div>
            <Row>
                <Col></Col>
                <Col xs="auto"><h1>Manage Ingridients</h1></Col>
                <Col></Col>
            </Row>
             <AddIngredient/>
            <Row style={{marginTop: '30px'}}>
                <Col></Col>
                <Col xs="auto"><IngredientList renderBasic={true}/></Col>
                <Col></Col>
            </Row>
            
        </div>
    );
}

export default IngredientPage;