const gql = require("graphql-tag");

const typeDefs = gql`
  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    description: String
    modulesCount: Int
    numberOfViews: Int
    modules : [Module!]!
  }

  type Module {
    id : ID!
    title : String!
    length : Int
  }

  type Author {
    id: ID!
    name: String!
    photo: String
  }

  type Mutation {
    incrementTrackViews(id : ID!) : IncrementTrackViewResponse
  }

  type IncrementTrackViewResponse {
    code : Int!
    success : Boolean!
    message : String!
    track : Track
  }

  type Query {
    tracksForHome: [Track!]!
    track(id : ID!) : Track
  }
`;

module.exports = typeDefs;
