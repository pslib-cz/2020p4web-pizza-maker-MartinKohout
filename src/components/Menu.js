import React from 'react';
import { Row, Col } from 'reactstrap';
import {Link} from 'react-router-dom';
function Menu(){
    return(
        <div>
            <Row>
                <Col></Col>
                <Col xs="auto"><h1>Choose food</h1></Col>
                <Col></Col>
            </Row>
            <Row>
            <Col></Col>
                <Col xs="3">
                <Link to="/order/pizza"><img style={{width: '150px'}} alt="pizza icon" src="./pizzaIcon.png"/></Link>
                </Col>
                <Col xs="3">
                <Link to="/order/calzone"><img alt="calzone icon" src="./calzoneIcon.png"/></Link>
                </Col>
                <Col></Col>
            </Row>
        </div>
    );
}

export default Menu;