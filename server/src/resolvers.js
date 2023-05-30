const resolvers = {
  Query: {
    tracksForHome: (_, __, { dataSource }) => {
      console.log(dataSource.trackAPI);
      return dataSource.trackAPI.getTracksForHome();
    },
  },
  Track: {
    author: ({ authorId }, _, { dataSource }) => {
      return dataSource.trackAPI.getAuthor(authorId);
    },
  },
};

module.exports = resolvers;
