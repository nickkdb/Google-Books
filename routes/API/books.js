const router= require('express').Router();
const booksController= require('../../controllers/booksController');

router.route("/")
// .get(booksController.getAll)
// .post(booksController.create);

router.route("/:id")
// .delete(booksController.remove)



