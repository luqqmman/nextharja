"use client";
import { useSession, getSession } from "next-auth/react"

export default function Provider ({ children, session }) {
    const { data: session, status } = useSession();

    if (status !== "authenticated") {
        return <h1>unauthorized</h1>;
    }

    return (
    <SessionProvider session={session}>
        { children }
    </SessionProvider>
    )
}