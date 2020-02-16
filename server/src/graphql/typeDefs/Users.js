const { gql } = require("apollo-server-express")

const user = gql`
    scalar Date
    enum Role {
        USER
        PRO
        ADMIN
    }
    type User {
        ID: ID!
        email: String!
        membership: Date
        role: Role!
        info: UserInfo
        clients: [User]
    }
    
    type UserInfo {
        fullName: String!
        birthDate: Date!
        height: Float!
        weigth: Float!
        gender: String!
        country: String
        phoneNumber: [String!]
    }
    extend type Query {
        users: [User]
    }
    extend type Mutation {
        registerUser(email: String!, password: String!): User!
    }
`
module.exports = user
