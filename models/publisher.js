const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PublisherSchema = new Schema({
    name: { type: String, required: true, maxLength: 120},
});

PublisherSchema.virtual("url").get(function () {
    return `/home/publisher/${this._id}`;
});

module.exports = mongoose.model("Publisher", PublisherSchema);