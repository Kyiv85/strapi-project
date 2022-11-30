module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connection: {
    client: "mysql",
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: env('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'default'),
      username: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', ''),
    }
  }
});