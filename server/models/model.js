import pg from 'pg';

const { Pool } = pg;

const PG_URI = 'postgres://hgmhjyup:slzpyGXDztxwbOJJlRZAhwBBQdniKax7@peanut.db.elephantsql.com/hgmhjyup';

const pool = new Pool({
    connectionString: PG_URI,
});

export const query = (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  };

  export { pool };

