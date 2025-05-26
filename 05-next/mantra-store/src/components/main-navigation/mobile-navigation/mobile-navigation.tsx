// by default components are "server components"
// 'use server'; // this is NOT for server components -> components are server components by default - this directive is for "server actions"
"use client";

import { useState } from "react";
import Link from "next/link";

export default function MobileNavigation() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <div className="container mx-auto px-4 flex items-center justify-between h-16 md:hidden">
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                    >
                        {menuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {menuOpen && (
                <div className="md:hidden bg-gray-800 text-white px-4 py-2 space-y-2">
                    <Link
                        href="/products"
                        className="block w-full text-left hover:underline"
                        onClick={() => setMenuOpen(false)}
                    >
                        Products
                    </Link>
                    <Link
                        href="/products/add"
                        className="block w-full text-left hover:underline"
                        onClick={() => setMenuOpen(false)}
                    >
                        Add a Product
                    </Link>
                </div>
            )}
        </>
    );
}