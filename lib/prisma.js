import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function find() {
    const allUsers = await prisma.user.findMany()

    return allUsers;
}

find()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })