const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");

const Schema = mongoose.Schema;

const User = new Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },

    fullname: { type: String, default: true },
    phone: { type: String, default: undefined },

    status: { type: Number, default: 1 }, //0->block, 1->active
    role: { type: Number, default: 0 }, //0->user, 1->admin
    
    library: { type: Array, default: undefined },
    // slug: { type: String, slug: "name", unique: true },
  },
  { timestamps: true }
);

// Add plugin
// mongoose.plugin(slug);

//collection name, with SINGULAR NOUN and name on the database will be the PLURAL NOUN
module.exports = mongoose.model("User", User);