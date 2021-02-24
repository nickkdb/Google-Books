import React from "react";
import {Row, Col, Jumbotron, Button} from 'react-bootstrap';
import '../css/results.css';

function Searchresults(props) {

    console.log(props.title);
    console.log(props.subtitle);
    let authorlist= "";
    let author= "Author";
    (props.authors.length <= 1 ? author += ": " : author += "s: ");
    console.log(props.authors);
    props.authors.map(el => {
        (authorlist=== "" ? authorlist += el : authorlist += `, ${el}`)
    });
    return (
        <>
        <Jumbotron className="resultsJumbo" fluid>
        <Row className="row-one">
        <Col md={6} className="titleCol">
        <h2>{props.title}</h2>
        </Col>
        <Col md={1} />
        <Col className="d-flex flex-row-reverse" md={5}>
            <h6>
                <strong>{author}</strong>
                {authorlist}
            </h6>
        </Col>
        </Row>
        <Row className="row-two">
            <Col className= "col-two d-flex flex-column-reverse" md={5}>
                <img className="bookpic" src={props.image} alt="bookthumbnail" />  
                <div>
                <Button className="buttons" href={props.link} target="_blank">View</Button>
                <Button className="buttons" href="#">Save</Button>
                    </div>         
            </Col>
            <Col md={6}>
                <h5>Description:</h5>
                <br />
                <p>{props.desc}</p>
            </Col>
            <Col md={1} />
        </Row>
        </Jumbotron>
        </>
    )
}

export default Searchresults;