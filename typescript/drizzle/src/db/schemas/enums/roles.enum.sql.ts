import {pgEnum} from "drizzle-orm/pg-core";

export const rolesEnumSql = pgEnum('roles', [
    "guest", "user", "admin"
])