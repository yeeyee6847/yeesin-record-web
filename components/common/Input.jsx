export default function Input({ labelName, value, isRequired, onChange }) {
    return (
        <div className='flex flex-col gap-1'>
            <label>{labelName} {isRequired ? (<span className='text-red-500'>*</span>) : ""}</label>
            <input type='text' onChange={onChange} value={value}
                className='bg-slate-600 border rounded py-2 px-3'>
            </input>
        </div>
    )
}