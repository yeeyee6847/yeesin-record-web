import Heading from '@/components/common/Heading';
import SpendingTypeTable from '@/components/maintenance/spending-type/Table';

export const metadata = {
  title: 'Spending Type'
};

export default async function SpendingType() {
  return (
    <>
      <div className='flex items-center justify-between'>
        <Heading>Spending Type</Heading>
      </div>
      <SpendingTypeTable/>
    </>
  )
}
