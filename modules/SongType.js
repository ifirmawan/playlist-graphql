const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLList,
  GraphQLInt
} = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'Song',
  description: 'Represent of a song by a artist',
  fields: () => ({
    uuid: {
      type: GraphQLNonNull(GraphQLString)
    },
    title: {
      type: GraphQLNonNull(GraphQLString)
    },
    album: {
      type: GraphQLString
    },
    artistId: {
      type: GraphQLList(GraphQLInt)
    }
  })
})