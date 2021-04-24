const db = require('../../models')
const Op = db.Sequelize.Op

/*
 Function checks if email already exists in database.
 Returns true if email already taken, null otherwise.
*/
UserExists = async (user_credentials) => {
    console.log(user_credentials)
    if (user_credentials === null || user_credentials === undefined) {
        throw new Error('No user_credentials was passed as an argument')
    }

    const user = await db.user.findOne({
        where: {
            [Op.or]: [{username: user_credentials}, {email: user_credentials}]
        }
    }).catch(err => {
        print("UserExists() DB Call Fail")
        return null
    })

    if (user && user !== null) return user

    return null
}

/*
 Function for finding a user based on their user id.
 @args
 - user_id : string

 @returns user object
*/
FindUser = async (credential) => {
    console.log("UserDB FindUser - ")
    console.log(credential)

        if (credential === null || credential === undefined) {
            throw new Error('No credential was passed as an argument')
        }

        let user = await db.user.findOne({
            where: {
                [Op.or]: [{id: credential}, {email: credential}, {username: credential}]
            }
        }).catch(err => {
            print("FindUser() DB Call Fail")
            return null
        })

        if (user && user !== null) {
            user.dataValues.username = user.dataValues.email
            return user
        }

        return null
}

/*
 Function creates a new user in database.
*/
CreateUser = async (args) => {
    if (args === null || args === undefined) {
        throw new Error('No args was passed as an argument')
    }

    if (!args.username) throw new Error('Invalid argument: username')
    if (!args.email) throw new Error('Invalid argument: email')
    if (!args.first_name) throw new Error('Invalid argument: first_name')
    if (!args.last_name) throw new Error('Invalid argument: last_name')
    if (!args.password) throw new Error('Invalid argument: password')
    if (_ValidatePermissionId(args.permission_id) === null) args.permission_id = 2 // 2 is user default //throw new Error('Invalid argument: permission_id')

    let user = await db.user.create({
        username: args.username,
        first_name: args.first_name,
        last_name: args.last_name,
        email: args.email,
        password: args.password,
        permission_id: args.permission_id
    }).catch(err => {
        print("CreateUser() DB Call Fail")
        return null
    })

    if (user && user !== null) {
        user.dataValues.username = user.dataValues.username
        return user
    }

    return null    
}

module.exports = {
    UserExists,
    FindUser,
    CreateUser
}


/*
 Function checks if permission already exists in database.
 Returns true if permission exists, false otherwise.
*/
async function _ValidatePermissionId(permission_id) {

    if (permission_id === null || permission_id === undefined) {
        throw new Error('No permission_id was passed as an argument')
    }

    const permissions = await db.permission.findOne({
        where: { id: permission_id }
    }).catch(err => {
        print("ValidatePermissionId() DB Call Fail")
        return null
    })

    if (permissions && permissions !== null) return permissions

    return null
}
