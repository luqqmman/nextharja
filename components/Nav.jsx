'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';


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
                    <Link href="/public/bumdes" className="flex items-center">BUMDES</Link>
                    <Link href="/public/gallery" className="flex items-center">GALERI</Link>
                </div>
            </div>
            
            {/* Mobile nav */}
            <div className="sm:hidden flex">
                <div className="flex space-x-4 relative">
                    <button
                        className="text-gray-200 flex items-center text-blue-600 p-3 transition-transform transform hover:scale-110"
                        onClick={() => setToggleDropdown((prev) => !prev)} 
                    >
                        {toggleDropdown ? <FaTimes className="block h-6 w-6" /> : <FaBars className="block h-6 w-6" />}
                    </button>

                    {toggleDropdown && (
                        <div 
                            onClick={() => setToggleDropdown(false)}
                            className="absolute right-0 z-10 top-12 mt-2 w-56 origin-top-right rounded-md bg-white shadow-md hover:shadow-lg transition-shadow duration-300 mx-4 text-black font-bold"
                            data-aos="zoom-in"
                        >
                            <div className="bg-blue-3 p-1 border-b border-gray-200">
                                <Link 
                                    href="/public" 
                                    className="text-sm hover:bg-gray-100 text-gray-700 block p-2"
                                    onClick={() => setToggleDropdown(false)}
                                >
                                    BERANDA
                                </Link>
                            </div>
                            <div className="bg-blue-3 p-1 border-b border-gray-200">
                                <Link 
                                    href="/public/article" 
                                    className="text-sm hover:bg-gray-100 text-gray-700 block p-2"
                                    onClick={() => setToggleDropdown(false)}
                                >
                                    BERITA
                                </Link>
                            </div>
                            <div className="bg-blue-3 p-1">
                                <Link 
                                    href="/public/umkm" 
                                    className="text-sm hover:bg-gray-100 text-gray-700 block p-2"
                                    onClick={() => setToggleDropdown(false)}
                                >
                                    UMKM
                                </Link>
                            </div>
                            <div className="bg-blue-3 p-1">
                                <Link 
                                    href="/public/bumdes" 
                                    className="text-sm hover:bg-gray-100 text-gray-700 block p-2"
                                    onClick={() => setToggleDropdown(false)}
                                >
                                    BUMDES
                                </Link>
                            </div>
                            <div className="bg-blue-3 p-1">
                                <Link 
                                    href="/public/gallery" 
                                    className="text-sm hover:bg-gray-100 text-gray-700 block p-2"
                                    onClick={() => setToggleDropdown(false)}
                                >
                                    GALERI
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
};

export default Nav;