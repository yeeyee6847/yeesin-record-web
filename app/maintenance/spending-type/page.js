import { createData } from '@/lib/prisma';
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

  const user = await main();
  console.log(user[0].id);
  const create = await createData("clnhov4l30000ds5wpfjlr9bp");

  return (
    <>
      <table class="border-collapse border border-slate-500 ...">
        <thead>
          <tr>
            <th class="border border-slate-600 ...">State</th>
            <th class="border border-slate-600 ...">City</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-slate-700 ...">Indiana</td>
            <td class="border border-slate-700 ...">Indianapolis</td>
          </tr>
          <tr>
            <td class="border border-slate-700 ...">Ohio</td>
            <td class="border border-slate-700 ...">Columbus</td>
          </tr>
          <tr>
            <td class="border border-slate-700 ...">Michigan</td>
            <td class="border border-slate-700 ...">Detroit</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
