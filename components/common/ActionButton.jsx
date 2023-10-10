export default function ActionButton({ children, onClick, action }) {
    if(action === "delete") {
        return (
            <button onClick={onClick}
                className="border rounded px-2 py-1 bg-red-700 hover:bg-red-500">
                {children}
            </button>
        )
    }

    return (
        <button onClick={onClick}
            className="border rounded px-2 py-1 bg-blue-700 hover:bg-blue-500">
            {children}
        </button>
    )
}