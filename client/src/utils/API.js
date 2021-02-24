import axios from "axios";


export default {

    getBooks: (book) => {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${book}&maxResults=12&key=AIzaSyD1DnHlvbkvasvuoH_XZWPt17M4eOfdV9Y`);
    }
};