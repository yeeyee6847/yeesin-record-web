export default function TableData({ customClassName, children }) {
    return (
        <td className={`${customClassName ? customClassName : "border px-2 py-1 sm:px-3 sm:py-2"}`}>
            {children}
        </td>
    )
}