const Category = require("../models/category");
const asyncHandler = require("express-async-handler");

// muestra todos los juegos de mesa
exports.category_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: category_list");
});

// muestra un unico juegos de mesa
exports.category_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: category_detail: ${req.params.id}`);
});

exports.category_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: category_create_get");
});

exports.category_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: category_create_post");
});

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