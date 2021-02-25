import React, { useState } from "react";
import {Container, Row, Col, Jumbotron, InputGroup, FormControl, Button} from 'react-bootstrap';
import '../css/search.css';
import API from '../utils/API';
import Results from '../components/results';
import logo from "../utils/images/bookclipart.png";

function Search() {

    const [books, setBooks]= useState([]);
    const [search, setSearch]= useState("");

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    const handleSubmit = () => {
        let book= search.toLowerCase().replace(/ /g, "");
        API.getBooks(book).then(res => {
            console.log(res.data.items);
            setBooks(res.data.items);
        });
    } 

    const saveBook = (res) => API.saveBook(res);
    

    return (
        <Container fluid>
            <Row className="searchRow">
                <Col md={{span: 10, offset: 1}}>
                <Jumbotron style={{borderRadius: 0}} className="jumbotron searchJumbotron">
                    <h1 className= "searchHeading">Search for a Book</h1>
                    <hr id="hrtag" color={"#0F9D58"}/>
                        <h4 className= "searchSubtitle">
                            View the book on Google's site, or save it for later!
                         </h4>
                         <InputGroup className= "searchInput">
                         <FormControl onChange={handleChange} type="text" size="lg" placeholder="Search for a book!" />
                         <InputGroup.Append>
                         <Button  onClick={handleSubmit} className= "submitbtn">Submit</Button>
                         </InputGroup.Append>                      
                        </InputGroup>
                </Jumbotron>
                </Col>
            </Row>
            <Row>
                <Col md={{span: 8, offset: 2}}>
                <h1 style={{textAlign: "center", marginTop: "25px"}}>Results: </h1>
                    {books.length > 0 && books.map(el => {
                        return (
                        <Results
                        id= {el.id}
                        title= {el.volumeInfo.title}
                        authors={el.volumeInfo.authors}
                        desc= {el.volumeInfo.description}
                        link= {el.volumeInfo.infoLink}
                        image= {(el.volumeInfo.imageLinks ? el.volumeInfo.imageLinks.thumbnail : logo)}
                        fxn= {saveBook}
                        page= {"search"}
                        />
                        )
                    })}
                </Col>
            </Row>
        </Container>
    )
}

export default Search;