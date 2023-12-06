const Publisher = require("../models/publisher");
const asyncHandler = require("express-async-handler");

// Muestra lista de todos los Publishers.
exports.publisher_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: publisher list");
});

// Muestra la pagina de detalle de un publisher.
exports.publisher_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: publisher_detail: ${req.params.id}`);
});

// Muestra el formualario de creacion de publishers.
exports.publisher_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: publisher_create_get");
});

// Controla la accion de crear al publisher mediante post.
exports.publisher_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: publisher_create_post");
});

// Muestra la vista de eliminar al pubisher mediante GET.
exports.publisher_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: publisher_delete_get");
});

// Controla la accion de borrar al publisher mediante post.
exports.publisher_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: publisher_delete_post");
});

// Muestra el formulario de actualizar al publisher en get
exports.publisher_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: publisher_update_get");
});

// Controla la accion de actualizar al publisher mediante post..
exports.publisher_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: publisher_update_post");
});