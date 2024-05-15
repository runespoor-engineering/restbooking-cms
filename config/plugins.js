module.exports = () => ({
  graphql: {
    config: {
      endpoint: '/graphql',
      shadowCRUD: true,
      playgroundAlways: true,
      depthLimit: 27,
      defaultLimit: -1,
      apolloServer: {
        introspection: true
      }
    },
  },
});
