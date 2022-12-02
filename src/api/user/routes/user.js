module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/me',
      handler: 'user.me',
      config: {
        policies: [],
        description: "Get current user information"
      }
    }
  ]
};
