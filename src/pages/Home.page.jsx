import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container, PostCard} from '../components'
import { useSelector } from 'react-redux';

function Home() {
    const [posts, setPosts] = useState([])
    const authStatus = useSelector((state)=>state.auth.status)
    const userData = useSelector((state)=>state.auth.userData)
    //console.log("userdata",userData)
    //console.log("authstatus",authStatus)
    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
  
    if (!authStatus) {
        return (
            <div className='w-full bg-[#0f172a] text-white'>
                <div className='relative overflow-hidden'>
                    <div className='pointer-events-none absolute -top-32 left-10 h-64 w-64 rounded-full bg-[#38bdf8]/20 blur-3xl' />
                    <div className='pointer-events-none absolute -bottom-40 right-10 h-80 w-80 rounded-full bg-[#f97316]/25 blur-3xl' />
                    <Container>
                        <div className='py-16 md:py-24'>
                            <div className='grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center'>
                                <div>
                                    <p className='text-xs font-semibold uppercase tracking-[0.3em] text-slate-300'>Chai Blog</p>
                                    <h1 className='mt-4 text-4xl font-semibold tracking-tight md:text-5xl'>
                                        A modern home for thoughtful writing
                                    </h1>
                                    <p className='mt-4 max-w-xl text-base text-slate-300 md:text-lg'>
                                        Log in to explore curated posts, maker notes, and product stories designed for calm focus.
                                    </p>
                                    <div className='mt-8 flex flex-wrap gap-3'>
                                        <div className='rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white'>
                                            Member access
                                        </div>
                                        <div className='rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-slate-200'>
                                            Weekly drops
                                        </div>
                                    </div>
                                </div>
                                <div className='rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.9)] backdrop-blur'>
                                    <div className='space-y-4'>
                                        <div className='flex items-center justify-between rounded-2xl bg-white/10 px-4 py-3 text-sm'>
                                            <span className='text-slate-200'>Latest drop</span>
                                            <span className='text-white'>Friday, 10 AM</span>
                                        </div>
                                        <div className='rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-5'>
                                            <p className='text-sm uppercase tracking-[0.2em] text-slate-300'>Featured</p>
                                            <h3 className='mt-2 text-lg font-semibold text-white'>
                                                Calm engineering for modern teams
                                            </h3>
                                            <p className='mt-3 text-sm text-slate-300'>
                                                A quick read on building product culture with intention.
                                            </p>
                                        </div>
                                        <div className='flex items-center justify-between text-sm text-slate-300'>
                                            <span>Unlock all posts</span>
                                            <span className='rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white'>
                                                Login required
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        )
    }

    return (
        <div className='w-full bg-[#f4f2ee] text-slate-900'>
            <div className='relative overflow-hidden'>
                <div className='pointer-events-none absolute -top-32 -right-24 h-72 w-72 rounded-full bg-[#ffb36b]/30 blur-3xl' />
                <div className='pointer-events-none absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-[#6bb7ff]/25 blur-3xl' />
                <Container>
                    <div className='py-14 md:py-20'>
                        <div className='flex flex-col gap-6 md:flex-row md:items-end md:justify-between'>
                            <div>
                                <p className='text-xs font-semibold uppercase tracking-[0.28em] text-slate-500'>Chai Blog</p>
                                <h1 className='mt-3 text-4xl font-semibold tracking-tight md:text-5xl'>
                                    Stories curated for builders
                                </h1>
                                <p className='mt-4 max-w-xl text-base text-slate-600 md:text-lg'>
                                    Fresh perspectives on product, design, and engineering — brewed for focus and clarity.
                                </p>
                            </div>
                            <div className='flex flex-wrap items-center gap-3'>
                                <div className='rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm font-medium text-slate-700 backdrop-blur'>
                                    {posts.length} posts
                                </div>
                                <div className='rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-slate-900/15'>
                                    Welcome back
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

export default Home
