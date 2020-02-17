const { ApolloServer } = require("apollo-server-express")
const typeDefs = require("../graphql/typeDefs")
const express = require("express")

const app = express()
const server = new ApolloServer({
    context: async ({ req, res }) => {
        //Can check headers here
        //Setup variables to used globaly etc db connection
        //  console.log(res)
    },
    typeDefs: typeDefs,
    resolvers: {},
    playground: true
})

server.applyMiddleware({ app })

app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)
