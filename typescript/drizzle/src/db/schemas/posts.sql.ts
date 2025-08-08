import {index, integer, pgTable, uniqueIndex, varchar} from "drizzle-orm/pg-core";
import {users} from "./users.sql.ts";
import {generateUniqueString} from "../../../generateUniqueString.ts";

export const posts = pgTable(
    "posts",
    {
        id: integer().primaryKey().generatedAlwaysAsIdentity(),
        slug: varchar().$default(() => generateUniqueString(16)),
        title: varchar({length: 256}),
        ownerId: integer("owner_id").references(() => users.id),
    },
    (table) => [
        uniqueIndex("slug_idx").on(table.slug),
        index("title_idx").on(table.title),
    ]
);