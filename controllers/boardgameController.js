const Boardgame = require("../models/boardGame");
const Category = require("../models/category");
const Publisher = require("../models/publisher")
const { body, validationResult } = require("express-validator");

const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async (req, res, next) => {
  const [numBoardgames, numPublishers, numCategories, categories] = await Promise.all([
      Boardgame.countDocuments({}).exec(),
      Publisher.countDocuments({}).exec(),
      Category.countDocuments({}).exec(),
      Category.find({}).exec()
  ])

  res.render("index", {title: "Board Game Manager", numBoardgames: numBoardgames, numCategories: numCategories, numPublishers: numPublishers, categories: categories})
});

exports.indexSidebar = asyncHandler(async (req, res, next) => {
  const categories = await Category.find({}).exec()

  res.render("layout", {categories: categories})
});

// muestra todos los juegos de mesa
exports.boardgame_list = asyncHandler(async (req, res, next) => {
  const boardgames = await Boardgame.find({}).exec()

  res.render("boardgames", {title: "List of boardgames", boardgames: boardgames})
  
});

// muestra un unico juegos de mesa
exports.boardgame_detail = asyncHandler(async (req, res, next) => {
  const boardgame = await Boardgame.findById(req.params.id).exec();

  res.render("boardgame_detail", {boardgame: boardgame})

});

exports.boardgame_create_get = asyncHandler(async (req, res, next) => {

  const [publishers, categories] = await Promise.all([
    Publisher.find().sort({ name: 1 }).exec(),
    Category.find().sort({ name: 1 }).exec(),
  ]);

  res.render("boardgame_form", {
    title: "Create boardgame",
    publishers: publishers,
    categories: categories,
  });

});

exports.boardgame_create_post = [
  (req, res, next) => {
    if (!Array.isArray(req.body.category)) {
      req.body.category =
        typeof req.body.category === "undefined" ? [] : [req.body.category];
    }
    next();
  },

  body("name", "Name must not be empty.")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("publisher").trim().isLength({min: 1}).escape(),
  body("category*").escape(),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    // Create a Book object with escaped and trimmed data.
    const boardgame = new Boardgame({
      name: req.body.name,
      release_year: req.body.release_year,
      designers: req.body.designers,
      artists: req.body.artists,
      summary: req.body.summary,
      rating: req.body.rating,
      publisher: req.body.publisher,
      category: req.body.category,
    });

    if (!errors.isEmpty()) {
      const [publishers, categories] = await Promise.all([
        Publisher.find().sort({ name: 1 }).exec(),
        Category.find().sort({ name: 1 }).exec(),
      ]);

      for (const category of categories) {
        if (boardgame.category.includes(category._id)) {
          category.checked = "true";
        }
      }

      res.render("boardgame_form", {
        title: "Create boardgame",
        publishers: publishers,
        categories: categories,
        boardgame: boardgame,
        errors: errors.array(),
      });
    } else {
      
      await boardgame.save();
      res.redirect(boardgame.url);
    }
  }),
]

exports.boardgame_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: boardgame_delete_get");
});

exports.boardgame_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: boardgame_delete_post");
});

exports.boardgame_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: boardgame_update_get");
});

exports.boardgame_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: boardgame_update_post");
});