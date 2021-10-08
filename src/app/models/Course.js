// Using Node.js `require()`
const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;
const Course = new Schema(
  {
    name: { type: String, maxLength: 255, required: true },
    description: { type: String, maxLength: 600 },
    image: { type: String },
    slug: { type: String, slug: "name", unique: true },
    // createdAt: { type: Date, default: Date.now },
    // updatedAt: { type: Date, default: Date.now },  => use timestamp for this
  },
  { timestamps: true }
);
// Add plugin
mongoose.plugin(slug);
Course.plugin(mongooseDelete,{ deletedAt: true,overrideMethods: 'all' });
module.exports = mongoose.model("Course", Course);


