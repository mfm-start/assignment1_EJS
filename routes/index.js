const router = require("express").Router();
const { show_books, select_books } = require("../middlewares/query_book")


router.use(require("./books"));
router.get("/", (req, res) => {
    return res.send("Home routes");
});

// router.get("/books", show_books);

// router.use(require("./books"));

module.exports = router;