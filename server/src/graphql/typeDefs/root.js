const { gql } = require("apollo-server-express")

const root = gql`
    type Query {
        _empty: String
    }
    type Mutation {
        _empty: String
    }
`
module.exports = root
