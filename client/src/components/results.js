import React, {useState} from "react";
import {Row, Col, Jumbotron, Button} from 'react-bootstrap';
import '../css/results.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";

function Searchresults(props) {

    const [saved, setSaved]= useState(false);

    let authorlist= "";
    let content;
    let btntext;
    let author= "";
    {props.authors && (props.authors.length <= 1 ? author += "Author: " : author += "Authors: ")}
    {props.authors && props.authors.map(el => {
        (authorlist=== "" ? authorlist += el : authorlist += `, ${el}`)
    })}

    let data = {
        id: props.id,
        title: props.title,
        authors: props.authors,
        description: props.desc,
        link: props.link,
        image: props.image
    }

    const handleClick= () => {
        if (!saved) {
            props.fxn(data);
            setSaved(true);
        }
    }

    if (saved) {
        btntext= <FontAwesomeIcon icon={faCheckDouble} />;
    } else {
        btntext= "Save";
    }

    if (props.page === "saved") {
        content = <Button className="buttons red" onClick={() => props.fxn(props.id)}>Delete</Button>
    } else if (props.page === "search") {
        content = <Button className="buttons blue" onClick={handleClick}>{btntext}</Button>
    }

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
                <Button className="buttons yellow" href={props.link} target="_blank">View</Button>
                {content}
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