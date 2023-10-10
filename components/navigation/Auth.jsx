import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image"

export default function Auth() {
    const { data: session } = useSession()
    if (session) {
        return (
            <>
                <Image src={session.user.image} alt="" width={40} height={40} className="rounded-full"></Image>
                {session.user.name}
                <button onClick={() => signOut()}>Sign out</button>
            </>
        )
    }
    return (
        <>
            <button className="border border-black rounded px-2 py-1 hover:bg-slate-200" onClick={() => signIn()}>Sign in</button>
        </>
    )
}