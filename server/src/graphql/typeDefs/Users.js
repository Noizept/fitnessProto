const { gql } = require("apollo-server-express")

//7026
const user = gql`
    scalar Date

    type User {
        ID: ID!
        email: String!
        role: [String!]
        info: UserInfo
    }
    type Address {
        country: String
        city: String
        streetAddr: String
        postalNumber: String
    }
    type Contact {
        contactType: String
        contactValue: String
    }

    type UserInfo {
        addresses: [Address]
        contacts: [Contact]
        fullName: String
        birthDate: Date
        height: Float
        weigth: Float
        gender: String
        country: String
    }
    extend type Query {
        getAllUsers: [User]
        loginUser(email: String!, password: String!): String
    }
    extend type Mutation {
        registerUser(email: String!, password: String!): User!
    }
`
module.exports = user
