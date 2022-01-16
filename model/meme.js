const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");

const Schema = mongoose.Schema;

const Meme = new Schema(
  {
    // _id: { type: Schema.Types.ObjectId },
    name: { type: String, required: true },
    tag: { type: String },
    link: { type: String },
    copy: { type: Number, default: 0 },
    like: { type: Number, default: 0 },
    approve: { type: Number, default: 1 },
    contributor: { type: String, default: 'admin' },
    slug: { type: String, slug: "name", unique: true },
  },
  { timestamps: true }
);

// Add plugin
mongoose.plugin(slug);

//collection name, with SINGULAR NOUN and name on the database will be the PLURAL NOUN
module.exports = mongoose.model("Meme", Meme);