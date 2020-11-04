const response = require("../_helper/response");
const shared = require("../_helper/shared");

const MongoId = require("mongoose").Types.ObjectId
const { validateMongoId } = require("../_helper/shared")

/**
 * GET ALL CATEGORY
 */
exports.getAllCategory = async (req,res) => {
  try {
   response.added(res)
  } catch (e) {
    console.log(e);
    return response.serverError(res);
  }
}

exports.createCategory = async (req,res) => {
  try {
    response.added(res)
   } catch (e) {
     console.log(e);
     return response.serverError(res);
   }
}


exports.updateCategory = async (req,res) => {
  try {
    response.added(res)
   } catch (e) {
     console.log(e);
     return response.serverError(res);
   }
}

exports.deleteCategory = async (req,res) => {
  try {
    response.added(res)
   } catch (e) {
     console.log(e);
     return response.serverError(res);
   }
}


