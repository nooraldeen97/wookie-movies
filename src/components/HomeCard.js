import { Card , Col } from "react-bootstrap";
import React from 'react';




function HomeCard(props) {

    return (
        <Col className = "d-flex align-items-center justify-content-center">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.elem.poster} />
            </Card>
        </Col>
    );
}

export default HomeCard;
