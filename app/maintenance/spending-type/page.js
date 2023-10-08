import { PrismaClient } from '@prisma/client'

export const metadata = {
  title: "Spending Type"
};

const prisma = new PrismaClient()

async function main() {
  const allUsers = await prisma.user.findMany()

  return allUsers;
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

export default async function SpendingType() {

  const users  = await main();
  console.log("test:", users);

  return (
    <>
      <div className='text-white'>
        {users.map((user) => (user.id))}
      </div>
    </>
  )
}
