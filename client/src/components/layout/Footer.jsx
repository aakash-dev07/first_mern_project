import React from "react";
import { NavLink } from "react-router-dom";

export const Footer = () => {
    return (
        <footer className="mt-20 bg-slate-950 text-slate-300">

            {/* Main Footer */}
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-3">
                            
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-lg font-bold text-white shadow-lg shadow-indigo-500/20">
                                A
                            </div>

                            <div>
                                <h2 className="text-xl font-bold text-white">
                                    My Website
                                </h2>

                                <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                                    Welcome
                                </p>
                            </div>

                        </div>

                        <p className="mt-6 max-w-md text-sm leading-7 text-slate-400">
                            We build modern, simple and user-friendly digital
                            experiences that help people connect, learn and grow.
                        </p>

                        {/* Social Icons */}
                        <div className="mt-6 flex gap-3">

                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-sm font-semibold text-slate-400 transition duration-300 hover:-translate-y-1 hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:text-indigo-400"
                            >
                                f
                            </a>

                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-sm font-semibold text-slate-400 transition duration-300 hover:-translate-y-1 hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:text-indigo-400"
                            >
                                X
                            </a>

                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-sm font-semibold text-slate-400 transition duration-300 hover:-translate-y-1 hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:text-indigo-400"
                            >
                                in
                            </a>

                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-sm font-semibold text-slate-400 transition duration-300 hover:-translate-y-1 hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:text-indigo-400"
                            >
                                Git
                            </a>

                        </div>
                    </div>


                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
                            Quick Links
                        </h3>

                        <ul className="space-y-3">

                            <li>
                                <NavLink
                                    to="/"
                                    className="text-sm text-slate-400 transition hover:ml-1 hover:text-indigo-400"
                                >
                                    Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/about"
                                    className="text-sm text-slate-400 transition hover:ml-1 hover:text-indigo-400"
                                >
                                    About
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/contact"
                                    className="text-sm text-slate-400 transition hover:ml-1 hover:text-indigo-400"
                                >
                                    Contact
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/login"
                                    className="text-sm text-slate-400 transition hover:ml-1 hover:text-indigo-400"
                                >
                                    Login
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/register"
                                    className="text-sm text-slate-400 transition hover:ml-1 hover:text-indigo-400"
                                >
                                    Register
                                </NavLink>
                            </li>

                        </ul>
                    </div>


                    {/* Contact */}
                    <div>
                        <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
                            Contact
                        </h3>

                        <ul className="space-y-4 text-sm text-slate-400">

                            <li className="flex gap-3">
                                <span className="text-indigo-400">✉</span>
                                <span>hello@mywebsite.com</span>
                            </li>

                            <li className="flex gap-3">
                                <span className="text-indigo-400">☎</span>
                                <span>+91 98765 43210</span>
                            </li>

                            <li className="flex gap-3">
                                <span className="text-indigo-400">⌖</span>
                                <span>
                                    New Delhi, India
                                </span>
                            </li>

                        </ul>
                    </div>

                </div>


                {/* Divider */}
                <div className="my-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>


                {/* Bottom Section */}
                <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-slate-500 md:flex-row md:text-left">

                    <p>
                        © {new Date().getFullYear()} My Website. All rights reserved.
                    </p>

                    <div className="flex gap-6">
                        <a
                            href="#"
                            className="transition hover:text-slate-300"
                        >
                            Privacy Policy
                        </a>

                        <a
                            href="#"
                            className="transition hover:text-slate-300"
                        >
                            Terms & Conditions
                        </a>
                    </div>

                </div>

            </div>
        </footer>
    );
};
