'use client'
import SignIn from "@/hooks/useSession"
import { SessionProvider } from "next-auth/react"

export default function App() {
  return (
    <SignIn></SignIn>
  )
}