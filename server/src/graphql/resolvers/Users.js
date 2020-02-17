const { User } = require("../../database/mongodb/Model/User")
const { SchemaError, AuthenticationError } = require("apollo-server-express")
const bcryptjs = require("bcryptjs")
const { sign } = require("jsonwebtoken")

const getToken = async User => {
    const signOptions = { expiresIn: "12h" }
    const payload = {
        email: User.email,
        roles: User.role,
        fullName: User.info.fullName,
        birthDate: User.info.birthDate,
        country: User.info.country
    }
    const token = sign(payload, process.env.JWT_SECRET, signOptions)
    return token
}

module.exports = {
    Query: {
        getAllUsers: async (obj, args, context, info) => {
            const user = await User.find()
            return user
        },
        loginUser: async (obj, { email, password }, context, info) => {
            const user = await User.findOne({ email })
            if (!user) throw new AuthenticationError("Invalid credentials")
            if (!bcryptjs.compareSync(password, user.passwordHash))
                throw new AuthenticationError("Invalid credentials")
            return getToken(user)
        }
    },
    Mutation: {
        registerUser: async (obj, { email, password }, context, info) => {
            try {
                const user = new User({
                    email,
                    passwordHash: bcryptjs.hashSync(
                        password,
                        bcryptjs.genSaltSync(12)
                    )
                })
                await user.save()
                return user
            } catch (error) {
                throw new SchemaError(error)
            }
        }
    },
    User: {
        ID: userObj => userObj._id
    }
}
