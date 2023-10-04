const { Pool } = require("pg");

const PG_URI =
  "postgres://hgmhjyup:slzpyGXDztxwbOJJlRZAhwBBQdniKax7@peanut.db.elephantsql.com/hgmhjyup";

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log("Executed query", text);
    return pool.query(text, params, callback);
  },
};
