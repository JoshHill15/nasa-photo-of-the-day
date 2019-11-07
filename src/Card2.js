import React from "react"
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Col, Row
  } from 'reactstrap';

function Card2({date, imgUrl, explanation}){
    return (
        <div>
        <Row>
            <Col sm= "6">  
                <Card className = "card2">
                    <CardTitle className = "tit"><h1>APOD</h1></CardTitle>
                    <CardBody>
                    <CardImg className = "card-img" top width="100%" src = {imgUrl} alt="Card image cap" />
                    <CardSubtitle>Date: {date}</CardSubtitle>
                    <CardText>Explanation: {explanation}</CardText>
                    </CardBody>
                </Card>
            </Col> 
            <Col sm = "6">
                <Card className = "card2">
                    <CardTitle className = "tit"><h1>APOD</h1></CardTitle>
                    <CardBody>
                    <CardImg className = "card-img" top width="100%" src = {imgUrl} alt="Card image cap" />
                    <CardSubtitle>Date: {date}</CardSubtitle>
                    <CardText>Explanation: {explanation}</CardText>
                    </CardBody>
                </Card>
            </Col> 
        </Row>
            {/* <h1>CARD2</h1>
            <img src = {imgUrl} alt = "img"/>
            <p>Date: {date}</p>
            <p>Explanation: {explanation}</p> */}
        </div>
    )
}

export default Card2