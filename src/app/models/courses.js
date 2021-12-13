const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const slug = require("mongoose-slug-generator");
const mongoose_delete = require("mongoose-delete");

const Course = new Schema(
  {
    name: { type: String, maxlength: 255 },
    videoId: { type: String, maxlength: 255 },
    level: { type: String, maxlength: 255 },
    description: { type: String, maxlength: 600 },
    image: { type: String, maxlength: 255 },
    slug: { type: String, slug: "name", unique: true },
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

// add plugin
mongoose.plugin(slug);
Course.plugin(mongoose_delete)

module.exports = mongoose.model("Course", Course);
