import {Inter} from 'next/font/google'
import {useRouter} from "next/router";
// pages/index.tsx
import prisma from '../lib/prisma';
const inter = Inter({subsets: ['latin']})
import {signOut, useSession} from "next-auth/react";

export default function Home() {
    const {data: session} = useSession()

    const handleSignOut = () => signOut({redirect: false})
    return (
        <>
            <main
                className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
            >
                <button onClick={() => router.push("/add-post")}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Create A Snippet
                </button>
                {session ? (<>
                    <h3>You are signed in as {session['user']['name']}</h3>
                    {/*<img src={session['user']['image']} alt="new"/>*/}
                    <div></div>
                    <div>email: {session['user']['email']}</div>
                    <button onClick={handleSignOut}>sign out</button>
                </>) : (<>

                    </>

                )}
            </main>
        </>
    )
}

// index.tsx
