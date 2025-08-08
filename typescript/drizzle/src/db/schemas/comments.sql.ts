import {integer, pgTable, varchar} from "drizzle-orm/pg-core";
import {posts} from "./posts.sql.ts";
import {users} from "./users.sql.ts";
import {timestamps} from "../columns/timestamps.ts";

export const comments = pgTable(
    "comments",
    {
        id: integer().primaryKey().generatedAlwaysAsIdentity(),
        text: varchar({length: 256}),
        postId: integer("post_id").references(() => posts.id),
        ownerId: integer("owner_id").references(() => users.id),
        ...timestamps
    }
);