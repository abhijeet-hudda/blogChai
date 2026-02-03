import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/70 bg-[#f2efe9] text-slate-800">
        <div className="pointer-events-none absolute -top-32 left-16 h-72 w-72 rounded-full bg-[#ffb36b]/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 right-10 h-80 w-80 rounded-full bg-[#6bb7ff]/20 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-14">
            <div className="-m-6 flex flex-wrap">
                <div className="w-full p-6 md:w-1/2 lg:w-5/12">
                    <div className="flex h-full flex-col justify-between gap-6">
                        <div className="inline-flex items-center gap-3">
                            <Logo width="88px" />
                            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                                Chai Blog
                            </span>
                        </div>
                        <p className="max-w-sm text-sm text-slate-600">
                            Thoughtful writing, curated notes, and product stories for modern builders.
                        </p>
                        <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                            <span className="rounded-full border border-white/70 bg-white/70 px-3 py-1">
                                Brewed weekly
                            </span>
                            <span className="rounded-full border border-white/70 bg-white/70 px-3 py-1">
                                Since 2023
                            </span>
                        </div>
                        <p className="text-xs text-slate-500">
                            &copy; 2026 Chai Blog. All Rights Reserved.
                        </p>
                    </div>
                </div>
                <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                    <div className="h-full">
                        <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                            Company
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    className="text-sm font-medium text-slate-700 transition hover:text-slate-900"
                                    to="/"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="text-sm font-medium text-slate-700 transition hover:text-slate-900"
                                    to="/"
                                >
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="text-sm font-medium text-slate-700 transition hover:text-slate-900"
                                    to="/"
                                >
                                    Press Kit
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="text-sm font-medium text-slate-700 transition hover:text-slate-900"
                                    to="/"
                                >
                                    Partnerships
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                    <div className="h-full">
                        <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                            Support
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    className="text-sm font-medium text-slate-700 transition hover:text-slate-900"
                                    to="/"
                                >
                                    Help Center
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="text-sm font-medium text-slate-700 transition hover:text-slate-900"
                                    to="/"
                                >
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="text-sm font-medium text-slate-700 transition hover:text-slate-900"
                                    to="/"
                                >
                                    Account
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="text-sm font-medium text-slate-700 transition hover:text-slate-900"
                                    to="/"
                                >
                                    Status
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                    <div className="h-full">
                        <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                            Legal
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    className="text-sm font-medium text-slate-700 transition hover:text-slate-900"
                                    to="/"
                                >
                                    Terms
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="text-sm font-medium text-slate-700 transition hover:text-slate-900"
                                    to="/"
                                >
                                    Privacy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="text-sm font-medium text-slate-700 transition hover:text-slate-900"
                                    to="/"
                                >
                                    Licenses
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="text-sm font-medium text-slate-700 transition hover:text-slate-900"
                                    to="/"
                                >
                                    Cookies
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
