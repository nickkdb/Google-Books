const Book = require('../models/book');
const mongoose= require("mongoose");
const mongojs= require("mongojs");

module.exports = {
    getAll: (req, res) => {
        Book.find({}).then(data => {
            res.json(data)
        })
        .catch(err => {res.status(422).json(err)})
    },
    insertBook: (req, res) => {
        Book.create(req.body)
        .then(data => res.json(data))
        .catch(err => {res.status(422).json(err)})
    },
    deleteBook: (req, res) => {
        Book.remove({
            id: req.params.id
        })
        .then(data => res.json(data))
        .catch(err => {res.status(422).json(err)})
    }
}