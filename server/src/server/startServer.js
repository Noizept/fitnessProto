const { ApolloServer } = require("apollo-server-express")
const typeDefs = require("../graphql/typeDefs")
const resolvers = require("../graphql/resolvers")
const express = require("express")
const bodyParser = require("body-parser")
const { getToken } = require("../helpers/authHelper")
const cors = require("cors")

const app = express()
app.use(
    cors({
        origin: (origin, cb) => cb(null, true),
        credentials: true
    })
)

const server = new ApolloServer({
    context: ({ req, res }) => {
        const user = getToken(req.headers)
        return {
            user
        }
    },
    typeDefs: typeDefs,
    resolvers: resolvers,
    playground: true
})
app.use("/graphql", bodyParser.json())

server.applyMiddleware({ app, cors: false, path: "/graphql" })

app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)
