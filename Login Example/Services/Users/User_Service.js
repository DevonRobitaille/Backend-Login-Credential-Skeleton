const { UserExists, CreateUser, FindUser } = require('./User_DB')
const bcrypt = require('bcryptjs')
const saltRounds = 10

ValidateUserExists = async (user_credentials) => {
    if (!user_credentials) throw new Error('Invalid number of args passed. Please pass an email.')

    let taken_valid_user_credentials = null

    if (user_credentials) {
        taken_valid_user_credentials = await UserExists(user_credentials)
    }

    if (taken_valid_user_credentials) return taken_valid_user_credentials

    return null
}

CreateNewUser = async (args) => {
    if (args.password) args.password = await _Ecrypt(args.password)
    return await CreateUser(args)
}

UserSearch = async (credentials) => {
    return await FindUser(credentials)
}

module.exports = {
    ValidateUserExists,
    CreateNewUser,
    UserSearch
}

async function _Ecrypt(text) {
    return await bcrypt.hash(text, saltRounds)
}
