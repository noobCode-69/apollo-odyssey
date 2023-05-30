const resolvers = {
  Query: {
    tracksForHome: (_, __, { dataSource }) => {
      return dataSource.trackAPI.getTracksForHome();
    },
    track: (_, { id }, { dataSource }) => {
      return dataSource.trackAPI.getTrack(id);
    },
  },
  Mutation: {
    incrementTrackViews: async (_, { id }, { dataSource }) => {
      try {
        const track = await dataSource.trackAPI.incrementTrackViews(id);
        return {
          code: 200,
          success: true,
          message: `Successfully incremented number of views for track ${id}`,
          track,
        };
      } catch (err) {
        return {
          code: err.extensions.response.status,
          success: false,
          message: err.extensions.response.body,
          track: null,
        };
      }
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
