module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: env('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'strapidb'),
      user: env('DATABASE_USERNAME', 'otadmin'),
      password: env('DATABASE_PASSWORD', ''),
      ssl: env.bool('DATABASE_SSL', true)
    },
    options: {
      debug: env('DATABASE_DEBUG', false),
      filename: "tmp/data.sql"
    },
    useNullAsDefault: true
  }
});