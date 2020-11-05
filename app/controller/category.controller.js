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

// Create New Category
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
      response.json(res, result)
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

// Remove category
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


// Get category along with product count and product list
exports.getProductByCategory = async (req, res) => {
  try {
    let allProducts = await Category.aggregate([
      {
        $lookup: {
          from: "products",
          localField: "_id",
          foreignField: "category_id",
          as: "list"
        }
      }, {
        $unwind: {
          path: "$list",
          preserveNullAndEmptyArrays: false
        }
      },
      {
        $project: {
          name: 1,
          description: 1,
          products: "$list"
        }
      },
      {
        $group: {
          _id: "$_id",
          count: { $sum: 1 },
          name: { $first: "$name" },
          description: { $first: "$description" },
          products: { $push: "$products" }
        }
      }
    ])
    if(allProducts){
      response.json(res,allProducts)
    }
  } catch (e) {
    return response.serverError(res);
  }
}

