const con = require('../config/config')

exports.serverError = (res) => {
    res.status(con.serverErrorStatus).send(con.serverErrorMsg)
}
exports.unauthorized = (res) => {
    res.status(con.unauthStatus).send(con.unauthMsg)
}
exports.tokenExpired = (res) => {
    res.status(con.tokenExpStatus).send(con.tokenExpMsg)
}
exports.badRequest = (res,msg)=>{
    res.status(con.clientErrorStatus).send(msg||"Bad Request")
}
exports.added = (res)=>{
    res.status(con.successStatus).send(con.addedMsg)
}
exports.updated = (res)=>{
    res.status(con.successStatus).send(con.updatedMsg)
}
exports.deleted = (res)=>{
    res.status(con.successStatus).send(con.deletedMsg)
}
exports.restored = (res)=>{
    res.status(con.successStatus).send(con.restoredMsg)
}
exports.successMsg = (res,msg) => {
    res.status(con.successStatus).send(msg||'Success')
}
exports.json = (res,data)=>{
    res.status(con.successStatus).json(data||{})
}

exports.success = (res)=>{
    res.status(con.successStatus)
}