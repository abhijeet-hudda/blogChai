import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
  return (
    <div className='w-full bg-[#f7f4ef] text-slate-900'>
        <div className='relative overflow-hidden'>
            <div className='pointer-events-none absolute -top-32 -right-24 h-72 w-72 rounded-full bg-[#ffb36b]/30 blur-3xl' />
            <div className='pointer-events-none absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-[#6bb7ff]/25 blur-3xl' />
            <Container>
                <div className='py-14 md:py-20'>
                    <div className='flex flex-col gap-6 md:flex-row md:items-end md:justify-between'>
                        <div>
                            <p className='text-xs font-semibold uppercase tracking-[0.28em] text-slate-500'>Chai Blog</p>
                            <h1 className='mt-3 text-4xl font-semibold tracking-tight md:text-5xl'>
                                Modern reads brewed fresh
                            </h1>
                            <p className='mt-4 max-w-xl text-base text-slate-600 md:text-lg'>
                                Sip through thoughtfully curated posts on tech, design, and the craft of building on the web.
                            </p>
                        </div>
                        <div className='flex flex-wrap items-center gap-3'>
                            <div className='rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm font-medium text-slate-700 backdrop-blur'>
                                {posts.length} posts
                            </div>
                            <div className='rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-slate-900/15'>
                                New every week
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
        <Container>
            <div className='pb-16 md:pb-20'>
                <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                    {posts.map((post) => (
                        <div key={post.$id} className='group h-full rounded-2xl border border-white/80 bg-white/80 p-3 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.45)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-white hover:bg-white'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    </div>
  )
}

export default AllPosts
