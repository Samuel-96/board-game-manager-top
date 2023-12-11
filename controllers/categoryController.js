const Category = require("../models/category");
const Boardgame = require("../models/boardGame");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

// muestra todos los juegos de mesa
exports.category_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: category_list");
});

exports.category_detail = asyncHandler(async (req, res, next) => {

  const [category, boardgamesInCategory, categories] = await Promise.all([
    Category.findById(req.params.id).exec(),
    Boardgame.find({ category: req.params.id }, "name summary").exec(),
    Category.find({}).exec()
  ]);

  res.render("category_detail", {title: "Detail", category: category, boardgamesInCategory: boardgamesInCategory, categories: categories})
});

exports.category_create_get = asyncHandler(async (req, res, next) => {
  res.render("category_form", { title: "Create category" });
});

exports.category_create_post = [

  body("name", "Category name must contain at least 3 characters")
    .trim()
    .isLength({ min: 3 })
    .escape(),

    asyncHandler(async (req, res, next) => {
      const errors = validationResult(req);

      const category = new Category({ name: req.body.name });

      if (!errors.isEmpty()) {
        // There are errors. Render the form again with sanitized values/error messages.
          res.render("category_form", {
            title: "Create category",
            category: category,
            errors: errors.array(),
          });
          return;
      }
      else{
        const categoryExists = await Category.findOne({ name: req.body.name }).exec();
        if (categoryExists) {
          res.redirect(categoryExists.url);
        } else {
          await category.save();
          res.redirect(categoryExists.url);
        }
      }
    }),
]

exports.category_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: category_delete_get");
});

exports.category_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: category_delete_post");
});

exports.category_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: category_update_get");
});

exports.category_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: category_update_post");
});