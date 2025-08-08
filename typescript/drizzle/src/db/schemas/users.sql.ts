import {type AnyPgColumn, integer, pgTable, uniqueIndex, varchar} from "drizzle-orm/pg-core";
import {timestamps} from "../columns/timestamps.ts";
import {rolesEnumSql} from "./enums/roles.enum.sql.ts";

export const users = pgTable(
    "users",
    {
        id: integer().primaryKey().generatedAlwaysAsIdentity(),
        name: varchar({length: 255}).notNull(),

        firstName: varchar("first_name", {length: 256}),
        lastName: varchar("last_name", {length: 256}),
        age: integer().notNull(),
        email: varchar({length: 255}).notNull().unique(),
        invitee: integer().references((): AnyPgColumn => users.id),
        role: rolesEnumSql().default('guest'),
        ...timestamps
    },
    (pgTable) => [
        uniqueIndex('email_idx').on(pgTable.email)
    ]
);
