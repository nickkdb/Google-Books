import axios from "axios";


export default {

    getBooks: (book) => {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${book}&maxResults=12&key=${process.env.REACT_APP_APIKEY}`);
    },
    saveBook: (book) => {
        console.log("sending post!")
        return axios.post("/api/books", book);
    },
    loadSaved: () => {
        return axios.get("/api/books");
    },
    deleteBook: (id) => {
        return axios.delete("/api/books/" + id);
    }
};