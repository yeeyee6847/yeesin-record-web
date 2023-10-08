'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavigationLink({ children, href, prefetch, className }) {
    const pathname = usePathname();
    
    if (pathname === href && !className) {
        return (
            <span className='text-slate-400 text-lg cursor-not-allowed'>{children}</span>
        )
    }

    return (
        <Link href={href} className={`${className ? className : 'hover:text-slate-600 text-lg'}`} prefetch={prefetch}>
            {children}
        </Link>
    )
}