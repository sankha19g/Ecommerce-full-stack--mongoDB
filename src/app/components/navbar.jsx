"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/sellerpage", label: "Seller Page" },
];

const navstyle = "px-3 py-1.5 rounded-sm bg-slate-100 hover:bg-slate-300 cursor-pointer font-sans transition-colors duration-150";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="bg-blue-100/50 backdrop-blur-xl w-full fixed top-0 z-10 shadow-sm">

            {/* Main bar */}
            <div className="flex items-center justify-between px-5 sm:px-10 h-20">

                {/* Logo */}
                <div className="text-2xl font-bold tracking-wide">SHOPPING ZONE</div>

                {/* Desktop nav links */}
                <ul className="hidden md:flex flex-row gap-4 cursor-pointer">
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href}>
                            <li className={navstyle}>{link.label}</li>
                        </Link>
                    ))}
                </ul>

                {/* Desktop auth buttons */}
                <ul className="hidden md:flex flex-row gap-3">
                    <li className={navstyle}>Login</li>
                    <li className={navstyle}>Register</li>
                </ul>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden p-2 rounded-md hover:bg-slate-200 transition-colors"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile dropdown menu */}
            {menuOpen && (
                <div className="md:hidden bg-blue-100/90 backdrop-blur-xl border-t border-blue-200 px-5 py-4 flex flex-col gap-2">
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
                            <div className={`${navstyle} block w-full`}>{link.label}</div>
                        </Link>
                    ))}
                    <hr className="border-slate-300 my-1" />
                    <div className={`${navstyle} w-full`}>Login</div>
                    <div className={`${navstyle} w-full`}>Register</div>
                </div>
            )}
        </div>
    );
};

export default Navbar;