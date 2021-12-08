import { useState } from 'react';
import AdminNavbar from './AdminNavbar';

import Link from 'next/link'

export default function Sidebar() {
    const [showSidebar, setShowSidebar] = useState('-left-64');
    return (
        <>
            <AdminNavbar
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
            />
            <div
                className={`h-screen fixed top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-64 z-10 py-4 px-6 transition-all duration-300`}
            >
                <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
                    <a
                        href="https://material-tailwind.com?ref=mtd"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 text-center w-full inline-block"
                    >
                        <h6 color="gray">Menu</h6>
                    </a>
                    <div className="flex flex-col">
                        <hr className="my-4 min-w-full" />

                        <ul className="flex-col min-w-full flex list-none">
                            <li className="rounded-lg mb-4">
                                Pages
                            </li>
                            <li className="px-4 rounded-lg mb-2 text-gray-700">
                                <Link href="/">
                                    <a className="flex items-center gap-4 text-sm font-light py-3">
                                        Accueil
                                    </a>
                                </Link>
                            </li>
                            <li className="px-4 rounded-lg mb-2 text-gray-700">
                                <Link href="/app">
                                    <a className="flex items-center gap-4 text-sm font-light py-3">
                                        Dashboard
                                    </a>
                                </Link>
                            </li>
                            <li className="rounded-lg mb-2">
                                API
                            </li>

                            <li className="px-4 rounded-lg mb-2 text-gray-700">
                                <Link href="/api/crypto">
                                    <a className="flex items-center gap-4 text-sm font-light py-3">
                                        Crypto
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
