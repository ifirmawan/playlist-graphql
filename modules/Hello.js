const {
  GraphQLObjectType,
  GraphQLString
} = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'helloworld',
  description: 'Basic example static data graphql',
  fields: () => ({
    message: {
      type: GraphQLString
    }
  })
})