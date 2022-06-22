const express = require('express')
const mongoose = require('mongoose')


const movieSchema = require('./schema/schema')
const resolvers = require('./resolver/resolver')

const { graphqlHTTP } = require('express-graphql')

const cors = require('cors')


mongoose.connect('url', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(e => console.log(e)).catch(err => console.log(err))

const app = express()

app.use(cors())



app.use('/graphql', graphqlHTTP({
    schema: movieSchema,
    graphiql: true,
    rootValue: resolvers
}))




app.listen('5000', () => console.log("Server started"))