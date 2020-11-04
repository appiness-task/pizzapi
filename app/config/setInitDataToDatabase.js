
const { roles, admin } = require("./initData")
const { ROLE } = require("../model")
const { signUpUser } = require("../controller/authController")

exports.SET_INITIAL_ROLES_TO_DB = async () => {
  await Promise.all(
    roles.map( role => {
      return new Promise( async (resolve, reject) => {
        try{
          await new ROLE({roleName: role}).save()
          resolve()
        }catch(e){
          reject()
        }
      })
    })
  )
}

exports.SET_ADMIN_ACCOUNT_TO_DB = async () => {
  let req = {
    body: admin
  }
  await signUpUser(req, null, true)
}