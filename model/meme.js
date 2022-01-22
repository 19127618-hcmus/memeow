const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");

const Schema = mongoose.Schema;

const Meme = new Schema(
  {
    // _id: { type: Schema.Types.ObjectId },
    name: { type: String, required: true },
    tag: { type: String },
    link: { type: String },
    numOfCopy: { type: Number, default: 0 },
    numOfSave: { type: Number, default: 0 },
    approve: { type: Number }, //-1-> del, 0-> waiting, 1-> ok
    contributor: { type: String }, 
    slug: { type: String, slug: "name", unique: true },
  },
  { timestamps: true }
);
Meme.index({name: 'text', tag: 'text'});
// Add plugin
mongoose.plugin(slug);

//collection name, with SINGULAR NOUN and name on the database will be the PLURAL NOUN
module.exports = mongoose.model("Meme", Meme);