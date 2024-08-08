const books = require("../data/books.json");
const router = require("express").Router();
const { show_books, select_books } = require("../middlewares/query_book")

router.get("/books", show_books);

router.get("/books/ejs", (req, res) => {
    const book_list = books;
    res.render("books", {book_list});
});

router.get("/books/:id", select_books);


module.exports = router;