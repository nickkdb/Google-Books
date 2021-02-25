const router= require("express").Router();
const booksController= require("../../controllers/booksController");

// equals "/api/books/"
router.route("/")
.get(booksController.getAll)
.post(booksController.insertBook);

router.route("/:id")
.delete(booksController.deleteBook);

module.exports = router;



