import { PrismaClient } from "@/generated/prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import Database from "better-sqlite3";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const databaseUrl = process.env.DATABASE_URL ?? "file:./dev.db";
const usePostgres = databaseUrl.startsWith("postgresql");

function createPrismaClient(): PrismaClient {
  if (usePostgres) {
    // Use Postgres client from node_modules (run: npx prisma generate)
    const { PrismaClient: PostgresClient } = require("@prisma/client");
    return new PostgresClient({
      datasources: { db: { url: databaseUrl } },
      log: process.env.NODE_ENV === "development" ? ["query"] : [],
    }) as PrismaClient;
  }

  const dbPath = databaseUrl.replace("file:", "") || "./dev.db";
  const adapter = new PrismaBetterSqlite3({ url: dbPath });
  return new PrismaClient({
    adapter,
    log: process.env.NODE_ENV === "development" ? ["query"] : [],
  });
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
