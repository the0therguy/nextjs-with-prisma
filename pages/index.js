import {Inter} from 'next/font/google'
import {useRouter} from "next/router";
// pages/index.tsx
import prisma from '../lib/prisma';
const inter = Inter({subsets: ['latin']})

export default function Home() {
    const router = useRouter()
    const posts = []
    return (
        <>
            <main
                className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
            >
                <button onClick={() => router.push("/add-post")}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Create A Snippet
                </button>

                <ul className="">
                    {
                        posts.map(post => (
                            <li key={post.id}>
                                {post.title}
                            </li>
                        ))
                    }
                </ul>
            </main>
        </>
    )
}

// index.tsx
export const getStaticProps = async () => {
    const feed = await prisma.post.findMany({
        where: { published: true },
        include: {
            author: {
                select: { name: true },
            },
        },
    });
    return {
        props: { feed },
        revalidate: 10,
    };
};