import React from 'react'
import { NavLink } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 shadow-xl shadow-black/10 backdrop-blur-xl">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

                {/* Logo */}
                <div>
                    <NavLink
                        to="/"
                        className="group flex items-center gap-2"
                    >
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-lg font-bold text-white shadow-lg shadow-indigo-500/30 transition duration-300 group-hover:scale-105">
                            A
                        </div>

                        <div>
                            <h2 className="text-xl font-bold tracking-tight text-white">
                                My Website
                            </h2>

                            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500">
                                Welcome
                            </p>
                        </div>
                    </NavLink>
                </div>

                {/* Navigation Links */}
                <div className="hidden items-center gap-2 md:flex">

                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
                                isActive
                                    ? "bg-indigo-500/15 text-indigo-400"
                                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                            }`
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
                                isActive
                                    ? "bg-indigo-500/15 text-indigo-400"
                                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                            }`
                        }
                    >
                        About
                    </NavLink>

                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            `rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
                                isActive
                                    ? "bg-indigo-500/15 text-indigo-400"
                                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                            }`
                        }
                    >
                        Contact
                    </NavLink>

                    {/* Divider */}
                    <div className="mx-2 h-6 w-px bg-white/10"></div>

                    {/* Login */}
                    <NavLink
                        to="/login"
                        className={({ isActive }) =>
                            `rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                                isActive
                                    ? "text-indigo-400"
                                    : "text-slate-300 hover:text-white"
                            }`
                        }
                    >
                        Login
                    </NavLink>

                    {/* Register */}
                    <NavLink
                        to="/register"
                        className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-indigo-500 hover:shadow-indigo-500/30 active:translate-y-0"
                    >
                        Register
                    </NavLink>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="rounded-lg border border-white/10 bg-white/5 p-2.5 text-slate-300 transition hover:bg-white/10 hover:text-white md:hidden"
                    aria-label="Open menu"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-6 w-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                    </svg>
                </button>
            </div>
        </nav>
    );
};