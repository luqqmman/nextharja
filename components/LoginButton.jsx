"use client";

import { useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link";

export default function Component() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />

        <button 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-2 mx-2 rounded focus:outline-none focus:shadow-outline" 
        >
          <Link href="/admin">
            Admin Page
          </Link>
        </button>
        <button 
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 my-2 rounded focus:outline-none focus:shadow-outline" 
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-2 rounded focus:outline-none focus:shadow-outline" 
        onClick={() => signIn()}
      >
        Sign in
      </button>
    </>
  )
}