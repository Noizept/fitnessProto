const { gql } = require("apollo-server-express")

//7026
const user = gql`
    scalar Date

    enum Gender {
        Male
        Female
    }
    input UserRegisterInput {
        email: String!
        password: String!
        fullName: String!
        birthDate: Date!
        gender: Gender!
        height: Float!
        weigth: Float!
        country: String
    }
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
        birthDate: Date!
        height: Float!
        weigth: Float!
        gender: Gender!
        country: String
    }
    extend type Query {
        getAllUsers: [User]
        myself:User!
    }
    extend type Mutation {
        registerUser(userInput: UserRegisterInput): User!
        changePassword(newpassword: String!): String!
        loginUser(email: String!, password: String!): String

        addContact(contactType: String!, contactValue: String!): String
    }
`
module.exports = user
