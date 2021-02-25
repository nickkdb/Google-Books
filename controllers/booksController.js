const Book = require('../models/book');
const mongoose= require("mongoose");
const mongojs= require("mongojs");

module.exports = {
    getAll: (req, res) => {
        Book.find({}).then(data => {
            res.json(data)
        })
        // .catch(err => console.error(err));
    },
    insertBook: (req, res) => {
        Book.create(req.body)
        .then(data => res.json(data))
        // .catch(err => console.error(err));
    },
    deleteBook: (req, res) => {
        Book.remove({
            id: req.params.id
        })
        .then(data => res.json(data))
        // .catch(err => console.error(err));
    }
}