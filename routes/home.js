const express = require("express");
const router = express.Router();

// Require controller modules.
const boardgame_controller = require("../controllers/boardgameController");
const publisher_controller = require("../controllers/publisherController");
const category_controller = require("../controllers/categoryController");

/// RUTAS JUEGO DE MESA ///

// GET home page.
router.get("/", boardgame_controller.index);
router.get("/", boardgame_controller.indexSidebar);

// GET request for creating a Book. NOTE This must come before routes that display Book (uses id).
router.get("/boardgame/create", boardgame_controller.boardgame_create_get);

router.post("/boardgame/create", boardgame_controller.boardgame_create_post);

router.get("/boardgame/:id/delete", boardgame_controller.boardgame_delete_get);

router.post("/boardgame/:id/delete", boardgame_controller.boardgame_delete_post);

router.get("/boardgame/:id/update", boardgame_controller.boardgame_update_get);

router.post("/boardgame/:id/update", boardgame_controller.boardgame_update_post);

router.get("/boardgame/:id", boardgame_controller.boardgame_detail);

router.get("/boardgames", boardgame_controller.boardgame_list);

/// RUTAS PUBLISHER ///

router.get("/publisher/create", publisher_controller.publisher_create_get);

router.post("/publisher/create", publisher_controller.publisher_create_post);

router.get("/publisher/:id/delete", publisher_controller.publisher_delete_get);

router.post("/publisher/:id/delete", publisher_controller.publisher_delete_post);

router.get("/publisher/:id/update", publisher_controller.publisher_update_get);

router.post("/publisher/:id/update", publisher_controller.publisher_update_post);

router.get("/publisher/:id", publisher_controller.publisher_detail);

router.get("/publishers", publisher_controller.publisher_list);

/// RUTAS DE CATEGORIAS ///

router.get("/category/create", category_controller.category_create_get);

router.post("/category/create", category_controller.category_create_post);

router.get("/category/:id/delete", category_controller.category_delete_get);

router.post("/category/:id/delete", category_controller.category_delete_post);

router.get("/category/:id/update", category_controller.category_update_get);

router.post("/category/:id/update", category_controller.category_update_post);

router.get("/category/:id", category_controller.category_detail);

router.get("/categories", category_controller.category_list);

module.exports = router;