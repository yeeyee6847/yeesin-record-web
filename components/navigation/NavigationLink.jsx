'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavigationLink({ children, href, prefetch, className }) {
    const pathname = usePathname();
    
    if (pathname === href && !className) {
        return (
            <span className='text-slate-400 cursor-not-allowed'>{children}</span>
        )
    }

    return (
        <Link href={href} className={`${className ? className : 'hover:text-slate-600'}`} prefetch={prefetch}>
            {children}
        </Link>
    )
}