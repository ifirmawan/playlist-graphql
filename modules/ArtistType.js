const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt
} = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'Artist',
  description: 'This represents an artist of a Song',
  fields: () => ({
    id: {
      type: GraphQLNonNull(GraphQLInt)
    },
    name: {
      type: GraphQLNonNull(GraphQLString)
    },
    avatar: {
      type: GraphQLString
    }
  })
})