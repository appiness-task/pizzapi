const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
    price:{
      type:Number,
      required:true,
      default:0
    },
    openstock:{
      type:Number,
      default:0
    },
    currency:{
      type:String
    },
    category_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'category'
    }
  },
  {
    timestamps: true
  }
);
const Products = mongoose.model("products", productSchema);
module.exports = Products;
