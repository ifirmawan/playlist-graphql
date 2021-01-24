const { graphqlHTTP } = require('express-graphql')
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull
} = require('graphql')

const express = require('express')
const app = express()

const HelloType = require('./modules/Hello')
const ArtistType = require('./modules/ArtistType')
const SongType = require('./modules/SongType')
const artists = require('./modules/Artists')
const songs = require('./modules/Songs')

const RootQueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Root Query',
  fields: () => ({
    hello: {
      type: HelloType,
      description: 'Example hello world',
      resolve: () => ({ message: 'Hi' })
    },
    artists: {
      type: new GraphQLList(ArtistType),
      description: 'List an artists',
      resolve: () => artists
    },
    artist: {
      type: ArtistType,
      description: 'Find Spesific artist',
      args: {
        id: {
          type: GraphQLInt
        }
      },
      resolve: (parent, args) => artists.find(artist => artist.id === args.id)
    },
    songs: {
      type: GraphQLList(SongType),
      description: 'List of songs',
      resolve: () => songs
    },
    song: {
      type: SongType,
      description: 'Find spesific a song',
      args: {
        uuid: { 
          type: GraphQLString
        }
      },
      resolve: (parent, args) => songs.find(song => song.uuid === args.uuid)
    }
  })
})

const schema = new GraphQLSchema({
  query: RootQueryType
})

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}))
app.listen(5000, () => {
  console.log('Server running');
})