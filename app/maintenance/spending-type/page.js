import Heading from '@/components/common/Heading';
import SpendingTypeComponent from '@/components/maintenance/spending-type/SpendingType';
import SpendingTypeTable from '@/components/maintenance/spending-type/Table';
import { findAll, handlePrismaMethod } from '@/lib/prisma';

export const metadata = {
  title: 'Spending Type'
};

export default async function SpendingType() {
  const spendingTypes = await handlePrismaMethod(findAll("spendingType"))

  return (
    <>
      <div className='flex items-center justify-between'>
        <Heading>Spending Type</Heading>
      </div>
      {/* <SpendingTypeTable/> */}
      
      <SpendingTypeComponent spendingTypes={spendingTypes}/>
    </>
  )
}
