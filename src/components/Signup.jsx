import React, { useState } from "react";
import authService from "../appwrite/auth";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../store/features/authSlice";
import { Button, Input, Logo } from "./index.js";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

function Signup() {
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()

    const create = async(data) => {
        setError("")
        try {
            const userData = await authService.createAccount({...data})
            if (userData) {
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(login(userData));
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }

  return (
    <div className='w-full bg-[#0f172a] text-white'>
        <div className='relative overflow-hidden'>
            <div className='pointer-events-none absolute -top-20 right-12 h-72 w-72 rounded-full bg-[#38bdf8]/20 blur-3xl' />
            <div className='pointer-events-none absolute -bottom-40 left-6 h-80 w-80 rounded-full bg-[#f97316]/25 blur-3xl' />
            <div className='px-4 py-12 md:py-20'>
                <div className='mx-auto grid w-full max-w-5xl items-center gap-10 md:grid-cols-[0.9fr_1.1fr]'>
                    <div className='order-2 md:order-none'>
                        <div className='rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.9)] backdrop-blur'>
                            <div className='mb-6 flex items-center justify-between'>
                                <span className='inline-flex items-center gap-2'>
                                    <span className='inline-block w-full max-w-[90px]'>
                                        <Logo width="100%" />
                                    </span>
                                    <span className='text-xs font-semibold uppercase tracking-[0.25em] text-slate-300'>
                                        Chai Blog
                                    </span>
                                </span>
                                <span className='rounded-full border border-white/20 px-3 py-1 text-xs font-semibold text-slate-200'>
                                    Create account
                                </span>
                            </div>
                            <h3 className='text-2xl font-semibold leading-tight text-white'>Join the community</h3>
                            <p className='mt-2 text-sm text-slate-300'>
                                Already have an account?&nbsp;
                                <Link
                                    to="/login"
                                    className="font-semibold text-white transition hover:text-slate-200"
                                >
                                    Sign In
                                </Link>
                            </p>
                            {error && <p className="text-red-400 mt-6 text-sm">{error}</p>}

                            <form onSubmit={handleSubmit(create)} className="mt-6">
                                <div className='space-y-5'>
                                    <Input
                                    label="Full Name: "
                                    placeholder="Enter your full name"
                                    {...register("name", {
                                        required: true,
                                    })}
                                    />
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
                                        required: true,})}
                                    />
                                    <Button type="submit" className="w-full">
                                        Create Account
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div>
                        <p className='text-xs font-semibold uppercase tracking-[0.3em] text-slate-300'>Start here</p>
                        <h2 className='mt-4 text-4xl font-semibold tracking-tight md:text-5xl'>
                            Make your reading space feel personal
                        </h2>
                        <p className='mt-4 max-w-xl text-base text-slate-300 md:text-lg'>
                            Save your favorite posts, receive curated drops, and get early access to new series.
                        </p>
                        <div className='mt-6 flex flex-wrap gap-3'>
                            <div className='rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-slate-200'>
                                Early access
                            </div>
                            <div className='rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-slate-200'>
                                Curated collections
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup
