export default function Button({ children, onClick }) {
    return (
        <button onClick={onClick}
            className="border rounded px-3 py-2 bg-slate-800 hover:bg-slate-700">
            {children}
        </button>
    )
}