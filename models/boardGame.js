const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// definimos el esquema del Juego de mesa
const BoardgameSchema = new Schema({
    name: { type: String, required: true },
    release_year: {type: Date, default: Date.now}, // ponemos por defecto la fecha actual
    designers: { type: String },
    artists: { type: String },
    summary: { type: String },
    rating: {type: Number, default: 0},
    publisher: { type: Schema.Types.ObjectId, ref: "Publisher", required: true }, // referencia a Publisher
    category: [{ type: Schema.Types.ObjectId, ref: "Category" }] // referencia a Category, un array porque puede tener varias
});

// es buena práctica hacer funciones virtuales como url para obtenerla en otro
// punto del codigo
BoardgameSchema.virtual("url").get(function () {
    return `/home/boardgame/${this._id}`;
});

// lo exportamos
module.exports = mongoose.model("Boardgame", BoardgameSchema);