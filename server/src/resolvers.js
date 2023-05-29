const resolvers = {
  Query: {
    tracksForHome: (_, __, { dataSource }) => {
      return dataSource.trackAPI.getTracksForHome();
    },
  },
  Track: {
    author: ({ authorId }, _, { dataSource }) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },
  },
};

module.exports = resolvers;
