import { PrismaClient } from '@prisma/client'
export const prisma = new PrismaClient({
    datasources: {
        db: {
            url: "postgresql://runtime:@localhost:5432/lastentry?schema=public"
        }
    }
})