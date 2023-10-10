import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function handlePrismaMethod(method) {
    try {
        return await method
    } catch (error) {
        console.error(error);
        await prisma.$disconnect()
        process.exit(1);
    } finally {
        await prisma.$disconnect()
    }
}

export async function findAll(table) {
    return await prisma[table].findMany()
}

export async function findAllSpendingType() {
    return await prisma.spendingType.findMany()
}

async function find() {
    const allUsers = await prisma.user.findMany()

    return allUsers;
}



export async function createData(value) {
    await prisma.spendingType.create({
        data: {
            value: value,
            createdBy: "fake id"
        },
    })

    // const allUsers = await prisma.user.findMany({
    //     include: {
    //         posts: true,
    //         profile: true,
    //     },
    // })
    // console.dir(allUsers, { depth: null })
}

async function findOne() {
    const user = await prisma.user.findUnique({
        where: {
            email: 'elsa@prisma.io',
        },
    })
}

async function update() {
    const post = await prisma.post.update({
        where: { id: 1 },
        data: { published: true },
    })
    console.log(post)
}

export async function deleteSingle(id) {
    const data = await prisma.spendingType.delete({
        where: {
            id: id,
        },
    })
}


