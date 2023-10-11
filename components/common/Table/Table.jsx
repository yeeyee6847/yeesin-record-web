export default function Table({ children }) {
    return (
        <div className="w-full overflow-auto">
            <table className=" bg-slate-800 w-full">
                {children}
            </table>
        </div>
    )

}