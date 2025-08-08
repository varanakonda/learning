import 'dotenv/config';
import {drizzle} from 'drizzle-orm/node-postgres';
import {eq} from 'drizzle-orm';
import {users} from "./db/schemas/users.sql.js";

const db = drizzle(process.env.DATABASE_URL!, {
    logger: process.env.NODE_ENV !== 'production'
});

async function main() {
    const userData: typeof users.$inferInsert = {
        name: 'John',
        age: 30,
        email: 'john@example.com',
    };

    await db.insert(users).values(userData);
    console.log('New user created!')

    const usersResult = await db.select().from(users);
    console.log('Getting all users from the database: ', usersResult)
    /*
    const users: {
      id: number;
      name: string;
      age: number;
      email: string;
    }[]
    */

    await db
        .update(users)
        .set({
            age: 31,
        })
        .where(eq(users.email, userData.email));
    console.log('User info updated!')

    await db.delete(users).where(eq(users.email, userData.email));
    console.log('User deleted!')
}

// main();
