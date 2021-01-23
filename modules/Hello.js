const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} = require('graphql')

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'helloworld',
    description: 'Basic example static data graphql',
    fields: () => ({
      message: {
        type: GraphQLString,
        resolve: () => 'Hello World'
      }
    })
  })
})