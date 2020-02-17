const { Schema, model } = require("mongoose")
const { isEmail } = require("validator")

const UserSchema = new Schema(
    {
        email: {
            type: String,
            required: "Email is required",
            unique: true,
            trim: true,
            lowercase: true,
            validate: {
                validator: email => isEmail(email),
                message: props => `${props.value} is not a valid Email`
            }
        },
        passwordHash: { type: String, required: true, minlength: 8 },
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
    },
    { timestamps: true }
)

const User = model("users", UserSchema)
module.exports.schema = UserSchema
module.exports.User = User
