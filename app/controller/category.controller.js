const response = require("../_helper/response");
const shared = require("../_helper/shared");

const MongoId = require("mongoose").Types.ObjectId
const { validateMongoId } = require("../_helper/shared")

const Category = require('../model/model').Category
const Product = require('../model/model').Products
/**
 * GET ALL CATEGORY
 */
exports.getAllCategory = async (req, res) => {
  try {
    console.log("get");
    let categoryList = await Category.find({});
    if (categoryList) {
      response.json(res, categoryList)
    }
  } catch (e) {
    return response.serverError(res);
  }
}

exports.createCategory = async (req, res) => {
  try {

    console.log(req.body)

    let { name, description } = req.body;

    let newCategory = new Category({
      name,
      description
    })

    let result = await newCategory.save();
    console.log(result);
    if (result) {
      response.added(res)
    }
  } catch (e) {
    console.log(e);
    return response.serverError(res);
  }
}


exports.updateCategory = async (req, res) => {
  try {
    response.updated(res)
  } catch (e) {
    console.log(e);
    return response.serverError(res);
  }
}

// Remove category and curresponding products
exports.deleteCategory = async (req, res) => {
  try {
    let { category_id } = req.query;
    let deletedCategory = await Category.deleteOne({ _id: new MongoId(category_id) })

    response.json(res, deletedCategory)
  } catch (e) {
    console.log(e);
    return response.serverError(res);
  }
}


// Get Products by Category_id
exports.getProductByCategory = async (req, res) => {
  try {
    response.added(res)
  } catch (e) {
    return response.serverError(res);
  }
}

