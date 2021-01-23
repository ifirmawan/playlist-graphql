const { graphqlHTTP } = require('express-graphql')
const express = require('express')
const app = express()

const helloSchema = require('./modules/Hello')
app.use('/graphql', graphqlHTTP({
  schema: helloSchema,
  graphiql: true
}))
app.listen(5000, () => {
  console.log('Server running');
})