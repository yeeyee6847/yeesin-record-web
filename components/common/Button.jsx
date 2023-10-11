export default function Button({ children, onClick, customClass, buttonSize, buttonType }) {
    const general = "border rounded btn-min-width ";
    const small = "px-2 py-1 ";
    const normal = "px-3 py-2 ";
    const primary = "bg-blue-700 hover:bg-blue-500 ";
    const secondary = "bg-slate-700 hover:bg-slate-500 ";
    const danger = "bg-red-700 hover:bg-red-500 ";

    if (customClass) {
        return (
            <button onClick={onClick} className={customeClass}>
                {children}
            </button>
        )
    } else {
        return (
            <button onClick={onClick}
                className={general + (buttonSize === "small" ? small : normal) +
                    (buttonType === "danger" ? danger : buttonType === "secondary" ? secondary : primary)}>
                {children}
            </button>
        )
    }
}