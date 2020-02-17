const { gql } = require("apollo-server-express")

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
        users: [User]
    }
    extend type Mutation {
        registerUser(email: String!, password: String!): User!
    }
`
module.exports = user
