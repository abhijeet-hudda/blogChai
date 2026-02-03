import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../store/features/authSlice";
import { Button, Input, Logo } from "./index";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { useForm } from "react-hook-form";

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState("")

    const login = async(data) => {
        setError("")
        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(authLogin(userData));
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }

  return (
    <div className='w-full bg-[#f4f2ee] text-slate-900'>
        <div className='relative overflow-hidden'>
            <div className='pointer-events-none absolute -top-24 left-12 h-72 w-72 rounded-full bg-[#ffb36b]/30 blur-3xl' />
            <div className='pointer-events-none absolute -bottom-40 right-6 h-80 w-80 rounded-full bg-[#6bb7ff]/25 blur-3xl' />
            <div className='px-4 py-12 md:py-20'>
                <div className='mx-auto grid w-full max-w-5xl items-center gap-10 md:grid-cols-[1.1fr_0.9fr]'>
                    <div>
                        <p className='text-xs font-semibold uppercase tracking-[0.28em] text-slate-500'>Welcome back</p>
                        <h2 className='mt-4 text-4xl font-semibold tracking-tight md:text-5xl'>
                            Sign in to your workspace
                        </h2>
                        <p className='mt-4 max-w-xl text-base text-slate-600 md:text-lg'>
                            Access fresh posts, maker notes, and curated collections designed for calm focus.
                        </p>
                        <div className='mt-6 flex flex-wrap gap-3'>
                            <div className='rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm font-medium text-slate-700 backdrop-blur'>
                                Weekly drops
                            </div>
                            <div className='rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm font-medium text-slate-700 backdrop-blur'>
                                Member-only notes
                            </div>
                        </div>
                    </div>
                    <div className='rounded-3xl border border-white/80 bg-white/90 p-8 shadow-[0_24px_70px_-45px_rgba(15,23,42,0.5)] backdrop-blur'>
                        <div className='mb-6 flex items-center justify-between'>
                            <span className='inline-flex items-center gap-2'>
                                <span className='inline-block w-full max-w-[90px]'>
                                    <Logo width="100%" />
                                </span>
                                <span className='text-xs font-semibold uppercase tracking-[0.25em] text-slate-500'>
                                    Chai Blog
                                </span>
                            </span>
                            <span className='rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-500'>
                                Secure access
                            </span>
                        </div>
                        <h3 className='text-2xl font-semibold leading-tight text-slate-900'>Sign in</h3>
                        <p className='mt-2 text-sm text-slate-500'>
                            Don&apos;t have any account?&nbsp;
                            <Link
                                to="/signup"
                                className="font-semibold text-slate-900 transition hover:text-slate-700"
                            >
                                Sign Up
                            </Link>
                        </p>
                        {error && <p className="text-red-600 mt-6 text-sm">{error}</p>}
                        <form onSubmit={handleSubmit(login)} className='mt-6'>
                            <div className='space-y-5'>
                                <Input
                                label="Email: "
                                placeholder="Enter your email"
                                type="email"
                                {...register("email", {
                                    required: true,
                                    validate: {
                                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email address must be a valid address",
                                    }
                                })}
                                />
                                <Input
                                label="Password: "
                                type="password"
                                placeholder="Enter your password"
                                {...register("password", {
                                    required: true,
                                })}
                                />
                                <Button
                                type="submit"
                                className="w-full"
                                >Sign in</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login
