import React, {useState, useEffect} from "react";
import {Container, Row, Col} from 'react-bootstrap';
import API from "../utils/API";
import Results from "../components/results";

function Saved() {

    const [books, setBooks]= useState([]);

    useEffect(() => {
        API.loadSaved().then(res => setBooks(res.data));
    }, [])

    const deleteBook = (res) => {
        API.deleteBook(res);
        window.location.reload();
    }
    return (
        <Container fluid>
            <Row>
                <Col md={{span: 8, offset: 2}}>
                <h1 style={{textAlign: "center", marginTop: "25px"}}>Your saved Books: </h1>
                    {books.length > 0 && books.map(el => {
                        return (
                        <Results
                        id= {el.id}
                        title= {el.title}
                        authors={el.authors}
                        desc= {el.description}
                        link= {el.ilink}
                        image= {el.image}
                        fxn= {deleteBook}
                        page= {"saved"}
                        />
                        )
                    })}
                </Col>
            </Row>
        </Container>
    )
}

export default Saved;