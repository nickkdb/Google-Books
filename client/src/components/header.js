import React from "react";
import {Navbar, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import google from '../utils/images/google.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSave } from "@fortawesome/free-solid-svg-icons";
import "../css/style.css";

function Header() {

    return (
        <Navbar className= "bar">
            <Row className= "headerRow">
                <Col md={4}>
                <Navbar.Brand>
            <img src={google} alt="logo" height={"50"} width={"150"} />
          </Navbar.Brand>
          <hr color={"black"} />
          <h4 className="headerText">Books Search</h4>
                </Col>
                <Col md={6} />
                <Col className="headerCol" md={2}>
                <Link to="/">
                    <FontAwesomeIcon href="/" id="searchIcon" className="fas fa-stack fa-3x" icon={faSearch} />
                </Link>
                <Link to="/saved">
                    <FontAwesomeIcon href="/saved" id="saveIcon" className="fas fa-stack fa-3x" icon={faSave} />
                </Link>
                </Col>
            </Row>
          
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        </Navbar>
    )
}

export default Header;