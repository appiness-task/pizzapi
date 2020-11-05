const response = require("../_helper/response");
const shared = require("../_helper/shared");

const MongoId = require("mongoose").Types.ObjectId
const { validateMongoId } = require("../_helper/shared")


const Product = require('../model/model').Products;

/**
 * GET ALL Products
 */
exports.getAllProducts = async (req, res) => {
  try {
    let productList = await Product.find({})
    if (productList) {
      response.json(res, productList)
    }
  } catch (e) {
    console.log("*************", e);
    return response.serverError(res);
  }
}

// Add new Product
exports.addProduct = async (req, res) => {
  try {
    let { name, price, openstock, currency, category_id } = req.body;
    let newProduct = new Product({
      name,
      price,
      openstock,
      currency,
      category_id
    })
    let result = await newProduct.save();
    if (result) {
      response.json(res,result)
    }
  } catch (e) {
    console.log(e);
    return response.serverError(res);
  }
}


exports.updateProduct = async (req, res) => {
  try {
    response.success(res)
  } catch (e) {
    console.log(e);
    return response.serverError(res);
  }
}

exports.deleteProduct = async (req, res) => {
  try {
    response.success(res)
  } catch (e) {
    console.log(e);
    return response.serverError(res);
  }
}


