import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

beforeAll(async () => {
  // Before all tests: Connect to the database
  await prisma.$connect();
});

afterAll(async () => {
  // After all tests: Disconnect from the database
  await prisma.$disconnect();
});

export default prisma;