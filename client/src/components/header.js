import React from "react";
import {Navbar, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import google from '../utils/images/google.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSave } from "@fortawesome/free-solid-svg-icons";
import "../css/style.css";

function Header() {

    let w= window.innerWidth;
    let logoheight;
    let logowidth;
    let searchAndSaveSize;
    if (w <= 480) {
        logoheight= "40";
        logowidth= "125";
        searchAndSaveSize= "2";
    } else {
        logoheight= "50";
        logowidth= "150";
        searchAndSaveSize= "3";
    }

    return (
        <Navbar className= "bar">
            <Row className= "headerRow">
                <Col className="googleCol" md={6}>
                <Navbar.Brand>
            <img className="googleLogo" src={google} alt="logo" height={logoheight} width={logowidth} />
          </Navbar.Brand>
          <hr color={"black"} />
          <h4 className="headerText">Books Search</h4>
                </Col>
                <Col className="headerCol d-flex flex-row-reverse" md={6}>
                <Link to="/saved">
                    <FontAwesomeIcon href="/saved" id="saveIcon" className={`fas fa-stack fa-${searchAndSaveSize}x`} icon={faSave} />
                </Link>
                <Link to="/">
                    <FontAwesomeIcon href="/" id="searchIcon" className={`fas fa-stack fa-${searchAndSaveSize}x`} icon={faSearch} />
                </Link>
                </Col>
            </Row>
          
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        </Navbar>
    )
}

export default Header;