const response = require("../_helper/response");
const shared = require("../_helper/shared");

const MongoId = require("mongoose").Types.ObjectId
const { validateMongoId } = require("../_helper/shared")

exports.createOrder = async(req, res) => {
    try {
        response.success(res)
    } catch (e) {
        response.serverError(res)
    }
}