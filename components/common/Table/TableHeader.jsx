export default function TableHeader({ customClassName, children }) {
    return (
        <th className={`${customClassName ? customClassName : "border p-2 sm:p-3"}`}>
            {children}
        </th>
    )
}