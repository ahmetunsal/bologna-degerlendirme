import { Pool } from 'pg';

const connectionString =
  process.env.sbf_POSTGRES_URL ||
  process.env.DATABASE_URL ||
  'postgres://d5778ebaaf01cf219941ee033eba290bfbbdabd94f2f59b77ba4f2b5b40e69bb:sk_DdoYOjDRIUFS3z8rjui7O@db.prisma.io:5432/postgres?sslmode=require';

// Global pool to prevent connection leaks during Next.js hot reloads
declare global {
  var _pgPool: Pool | undefined;
}

export const pool =
  global._pgPool ||
  new Pool({
    connectionString,
    ssl: { rejectUnauthorized: false },
    max: 10,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 10000,
  });

if (process.env.NODE_ENV !== 'production') {
  global._pgPool = pool;
}
