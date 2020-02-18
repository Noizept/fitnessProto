const { User } = require("../../database/mongodb/Model/User")
const { SchemaError, AuthenticationError } = require("apollo-server-express")
const bcryptjs = require("bcryptjs")
const { generateToken } = require("../../helpers/authHelper")

module.exports = {
    Query: {
        getAllUsers: async (obj, args, context, info) => {
            const user = await User.find()
            return user
        },
        myself: async (obj, args, { user }, info) => {
            if (!user) throw new AuthenticationError("You are not LoggedIn")
            return await User.findById(user.id)
        }
    },
    Mutation: {
        registerUser: async (obj, args, context, info) => {
            if (context.user) throw new AuthenticationError("You are LoggedIn")
            const {
                email,
                password,
                fullName,
                birthDate,
                gender,
                height,
                weigth,
                country
            } = args.userInput
            try {
                const user = new User({
                    email,
                    passwordHash: bcryptjs.hashSync(
                        password,
                        bcryptjs.genSaltSync(12)
                    ),
                    info: {
                        fullName,
                        birthDate,
                        weigth,
                        height,
                        gender,
                        country
                    }
                })
                await user.save()
                return user
            } catch (error) {
                throw new SchemaError(error)
            }
        },
        loginUser: async (obj, { email, password }, context, info) => {
            const user = await User.findOne({ email })
            if (!user) throw new AuthenticationError("Invalid credentials")
            if (!bcryptjs.compareSync(password, user.passwordHash))
                throw new AuthenticationError("Invalid credentials")
            return generateToken(user)
        },
        changePassword: async (obj, { newpassword }, context, info) => {
            if (!context.user)
                throw new AuthenticationError("Invalid Operation")
            const user = await User.findById(context.user.id)
            user.passwordHash = bcryptjs.hashSync(
                newpassword,
                bcryptjs.genSaltSync(12)
            )
            await user.save()
            return "Password Changed"
        }
    },
    User: {
        ID: userObj => userObj._id
    },
    Gender: {
        Male: "Male",
        Female: "Female"
    }
}
