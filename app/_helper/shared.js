const MongoObjectId = require("mongoose").Types.ObjectId;

exports.validateMongoId = (id) => {
    try {
        return new MongoObjectId(id)
    } catch (e) {
        return false
    }
}