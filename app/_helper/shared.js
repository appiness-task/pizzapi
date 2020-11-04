const MongoObjectId = require("mongoose").Types.ObjectId;


const CATEORY_PRODUCT_DEL_AGGRE=()=>{

}

exports.validateMongoId = (id) => {
    try {
        return new MongoObjectId(id)
    } catch (e) {
        return false
    }
}