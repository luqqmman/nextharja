'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';


const Nav = () => {
    const [ toggleDropdown, setToggleDropdown ] = useState(false);
    return (
        <nav className="bg-blue-900 text-white flex justify-between items-center p-3">
            <Link href="/" className="flex items-center" >
                <Image width={60} height={40} src="/mekarharja.png" alt="Logo" className="h-10" />
                <div>
                    <h1 className="ml-3 text-2xl hidden sm:block">Desa Mekarharja</h1>
                    <p className="ml-3 hidden sm:block">Kota Banjar</p>

                </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden sm:flex">
                <div className="flex space-x-4 p-3">
                    <Link href="/public" className="flex items-center">HOME</Link>
                    <Link href="/public/article" className="flex items-center">BERITA</Link>
                    <Link href="/public/umkm" className="flex items-center">UMKM</Link>
                </div>
            </div>

            {/* Mobile nav */}
            <div className="sm:hidden flex">
                <div className="flex space-x-4 relative">
                    <button 
                        class="flex items-center text-blue-100 p-3"
                        onClick={() => setToggleDropdown((prev) => !prev)} 
                    >
                        <svg class="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Mobile menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                        </svg>
                    </button>
                
                    {
                        toggleDropdown && (
                            <div 
                                onClick={() => setToggleDropdown(false)}
                                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-md rounded hover:shadow-lg transition-shadow duration-300 mx-4 p-4 text-black font-bold">
                                <div className="bg-blue-3">
                                    <Link 
                                        href="/public" 
                                        className="text-sm hover:bg-gray-100 text-gray-700"
                                        onClick={() => setToggleDropdown(false)}
                                    >
                                        Beranda
                                    </Link>
                                </div>
                                <div className="bg-blue-3">
                                    <Link 
                                        href="/public/article" 
                                        className="text-sm hover:bg-gray-100 text-gray-700"
                                        onClick={() => setToggleDropdown(false)}
                                    >
                                        Berita
                                    </Link>
                                </div>
                                <div className="bg-blue-3">
                                    <Link 
                                        href="/public/umkm" 
                                        className="text-sm hover:bg-gray-100 text-gray-700"
                                        onClick={() => setToggleDropdown(false)}
                                    >
                                        UMKM
                                    </Link>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </nav>
    )
};

export default Nav;