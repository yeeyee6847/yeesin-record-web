import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function find() {
    const allUsers = await prisma.user.findMany()

    return allUsers;
}

export async function createData(userId) {
    await prisma.spendingType.create({
        data: {
            value: "Test",
            createdBy: userId
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

// find()
//     .then(async () => {
//         await prisma.$disconnect()
//     })
//     .catch(async (e) => {
//         console.error(e)
//         await prisma.$disconnect()
//         process.exit(1)
//     })

