import 'dotenv/config';
import {defineConfig} from 'drizzle-kit';

/**
 * @url: https://orm.drizzle.team/docs/drizzle-config-file
 */
export default defineConfig({
    out: './migrations',
    schema: './src/db/schemas/**/*.sql.ts',
    dialect: 'postgresql',
    casing: 'snake_case',
    dbCredentials: {
        url: process.env.DATABASE_URL!,
    },
    // migrations: {
    //     table: '__drizzle_migrations', // `__drizzle_migrations` by default
    //     schema: 'public', // used in PostgreSQL only, `drizzle` by default
    // },
});
