const { Schema, model } = require("mongoose")

const UserSchema = new Schema({
    email: { type: String, required: true,unique:true },
    passwordHash: { type: String, required: true },
    role: { type: [String], default: ["USER"] },
    info: {
        fullName: String,
        birthDate: Date,
        height: Number,
        weigth: Number,
        gender: String,
        country: String,
        addresses: [
            {
                country: String,
                city: String,
                streetAddr: String,
                postalNumber: String
            }
        ],
        contacts: [
            {
                contactType: String,
                contactValue: String
            }
        ]
    }
})

const User = model("users", UserSchema)
module.exports.schema = UserSchema
module.exports.User = User
