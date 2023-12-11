const Publisher = require("../models/publisher");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

// Muestra lista de todos los Publishers.
exports.publisher_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: publisher list");
});

// Muestra la pagina de detalle de un publisher.
exports.publisher_detail = asyncHandler(async (req, res, next) => {
  const publisher = await Publisher.findById(req.params.id).exec();
  res.render("publisher_detail", {publisher: publisher});
});

// Muestra el formualario de creacion de publishers.
exports.publisher_create_get = asyncHandler(async (req, res, next) => {
  res.render("publisher_form", { title: "Create publisher" });
});

// Muestra el formualario de creacion de publishers.
exports.publisher_create_post = [
  // validamos y  sanitizamos los datos del form
  body("name").trim().isLength(1).escape().withMessage("First name must be specified."),

  // procesamos la request despues de comprobar los datos
  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    const publisher = new Publisher({
      name: req.body.name,
    });

    // comprobamos si hay errores, 
    if (!errors.isEmpty()) {
      // si los hay los mostramos y hacemos return
      res.render("publisher_form", {
        title: "Create publisher",
        publisher: publisher,
        errors: errors.array(),
      });
      return;
    } else {
      // datos validos
      await publisher.save();
      // Redirect al nuevo publisher creado
      res.redirect(publisher.url);
    }
  }),
]

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