import React from "react"
import { Card, CardTitle, CardText, Row, Col } from 'reactstrap';


// 
function Card1({date, caption, cordinatesX, cordinatesY, cordinatesZ}){
    return (
        <div>
                <Row>
      <Col sm="6">
        <Card className = "card" body>
          <CardTitle className = "card-title"><h1>Earth Polychromatic Imaging Camera (EPIC)</h1></CardTitle>
          <CardText className = "card-text">Caption: {caption}</CardText>
          <CardText>Date: {date}</CardText>
          <CardText>Cordinates: {cordinatesX}, {cordinatesY}, {cordinatesZ}</CardText>
        </Card>
      </Col>
      <Col sm="6">
        <Card body>
          <CardTitle className = "card-title"><h1>Earth Polychromatic Imaging Camera (EPIC)</h1></CardTitle>
          <CardText>Caption: {caption}</CardText>
          <CardText>Date: {date}</CardText>
          <CardText>Cordinates: {cordinatesX}, {cordinatesY}, {cordinatesZ}</CardText>
        </Card>
      </Col>
    </Row>
            {/* <img src = {imgUrl} alt = "img"/>
            <p>Cordinates: {cordinatesX}, {cordinatesY}, {cordinatesZ}</p>
            <p>Caption: {caption}</p>
            <p>Date: {date}</p> */}
        </div>
    )
}



export default Card1