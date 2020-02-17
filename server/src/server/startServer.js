const { ApolloServer } = require("apollo-server-express")
const typeDefs = require("../graphql/typeDefs")
const resolvers = require("../graphql/resolvers")
const express = require("express")
const bodyParser = require("body-parser")

const app = express()
app.use("/graphql", bodyParser.json())

const server = new ApolloServer({
    context: async ({ req, res }) => {
        //Can check headers here
        //Setup variables to used globaly etc db connection
        //  console.log(res)
    },
    typeDefs: typeDefs,
    resolvers: resolvers,
    playground: true
})

server.applyMiddleware({ app })

app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)
