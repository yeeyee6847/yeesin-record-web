import { PencilSquareIcon, TrashIcon, XMarkIcon } from '@heroicons/react/24/solid'

export default function Tooltip({ action, onClick }) {
    if (action === 'edit') {
        return (
            <PencilSquareIcon className='h-5 w-5 inline mr-2' title='Edit' />

        )
    } else if (action === 'remove') {
        return (
            <TrashIcon className='h-5 w-5 inline mr-2' title='Remove' />
        )
    } else if (action === 'closeModal') {
        return (
            <XMarkIcon onClick={onClick}
                className='w-4 h-4 sm:w-5 sm:h-5 hover:text-slate-700 cursor-pointer' />
        )
    }
}