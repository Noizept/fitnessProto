const { sign, verify } = require("jsonwebtoken")

const generateToken = User => {
    const signOptions = { expiresIn: "12h" }
    const payload = {
        id: User._id,
        email: User.email,
        roles: User.role,
        fullName: User.info.fullName,
        birthDate: User.info.birthDate,
        country: User.info.country
    }
    const token = sign(payload, process.env.JWT_SECRET, signOptions)
    return token
}

const getToken = ({ authorization }) => {
    try {
        return verify(authorization.split(" ")[1] || "", process.env.JWT_SECRET)
    } catch (error) {
        return null
    }
}

module.exports.generateToken = generateToken
module.exports.getToken = getToken
