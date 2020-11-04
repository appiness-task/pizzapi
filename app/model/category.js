const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
    description:{
      type:String,
      default:""
    }
  },
  {
    timestamps: true
  }
);


const Category = mongoose.model("category", categorySchema);

categorySchema.pre('deleteOne', function(next) {
  var cate = this;
  console.log("8765",cate);
  mongoose.model('products').deleteMany({ category_id: cate._id }, next);
});
module.exports = Category;
