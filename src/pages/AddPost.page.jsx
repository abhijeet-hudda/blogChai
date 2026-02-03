import React from 'react'
import { Container, PostForm } from '../components'

function AddPost() {
  return (
    <div className='w-full bg-[#f4f2ee] text-slate-900'>
        <div className='relative overflow-hidden'>
            <div className='pointer-events-none absolute -top-24 right-8 h-72 w-72 rounded-full bg-[#ffb36b]/30 blur-3xl' />
            <div className='pointer-events-none absolute -bottom-40 left-10 h-80 w-80 rounded-full bg-[#6bb7ff]/25 blur-3xl' />
            <Container>
                <div className='py-12 md:py-16'>
                    <div className='flex flex-col gap-6 md:flex-row md:items-end md:justify-between'>
                        <div>
                            <p className='text-xs font-semibold uppercase tracking-[0.28em] text-slate-500'>New story</p>
                            <h1 className='mt-3 text-3xl font-semibold tracking-tight md:text-4xl'>
                                Add a fresh post
                            </h1>
                            <p className='mt-3 max-w-xl text-base text-slate-600'>
                                Share your latest thinking with the community.
                            </p>
                        </div>
                        <div className='flex flex-wrap items-center gap-3'>
                            <div className='rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm font-medium text-slate-700 backdrop-blur'>
                                Draft ready
                            </div>
                            <div className='rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-slate-900/15'>
                                Publish when ready
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
        <Container>
            <div className='pb-14 md:pb-18'>
                <div className='rounded-3xl border border-white/70 bg-white/80 p-6 shadow-[0_24px_70px_-45px_rgba(15,23,42,0.5)] backdrop-blur'>
                    <PostForm />
                </div>
            </div>
        </Container>
    </div>
  )
}

export default AddPost
