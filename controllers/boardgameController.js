const Boardgame = require("../models/boardGame");
const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async (req, res, next) => {
    
  res.render("index", {
      title: "Board Game Manager"
    });
  });

// muestra todos los juegos de mesa
exports.boardgame_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: boardgame_list");
});

// muestra un unico juegos de mesa
exports.boardgame_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: boardgame_detail: ${req.params.id}`);
});

exports.boardgame_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: boardgame_create_get");
});

exports.boardgame_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: boardgame_create_post");
});

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