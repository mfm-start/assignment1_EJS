const books = require("../data/books.json");
const fs = require("fs");

function show_books(req, res, next) {
    let book_list = books;
    if (book_list.length == 0){
        return res.send("list buku kosong")
    }

    return res.send(book_list);

    next();
};

function select_books(req, res, next) {
    const {id} = req.params;
    let book_list = books.find((book) => book.id == Number(id));

    if (!book_list) {
        return res.status(404).send("Product Not Found");
    };

    res.status(200).send(book_list);

    next();
}

module.exports = { show_books, select_books};