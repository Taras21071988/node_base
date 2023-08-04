export default () => ({
  port: process.env.PORT,
  db_port: process.env.DB_PORT,
  db_database: process.env.DB_DATABASE,
  db_user: process.env.DB_USER,
  db_password: process.env.DB_PASSWORD,
  db_host: process.env.DB_HOST,
  secret_jwt: process.env.SECRET,
  expire_jwt: process.env.EXPIRE_JWT,
});
