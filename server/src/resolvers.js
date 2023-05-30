const resolvers = {
  Query: {
    tracksForHome: (_, __, { dataSource }) => {
      return dataSource.trackAPI.getTracksForHome();
    },
    track: (_, { id }, { dataSource }) => {
      return dataSource.trackAPI.getTrack(id);
    },
  },
  Track: {
    author: ({ authorId }, _, { dataSource }) => {
      return dataSource.trackAPI.getAuthor(authorId);
    },
    modules: ({ id }, _, { dataSource }) => {
      return dataSource.trackAPI.getTrackModules(id);
    },
  },
};

module.exports = resolvers;
