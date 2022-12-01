module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: env('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'strapidb'),
      username: env('DATABASE_USERNAME', 'otadmin'),
      password: env('DATABASE_PASSWORD', ''),
    },
    useNullAsDefault: true
  }
});