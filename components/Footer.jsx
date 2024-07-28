import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white sm:px-32 py-8 flex flex-col justify-between md:h-64">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="mb-8 text-center md:text-left">
                    <h2 className="text-2xl font-bold">Desa Mekarharja</h2>
                    <p>Kota Banjar</p>
                </div>
                <div className="flex space-x-6 mb-4 md:mb-0">
                    <Link href="https://www.facebook.com" target="_blank" className="text-white hover:text-yellow-500 transition duration-300">
                        <FaFacebookF size={24} />
                    </Link>
                    <Link href="https://www.twitter.com" target="_blank" className="text-white hover:text-yellow-500 transition duration-300">
                        <FaTwitter size={24} />
                    </Link>
                    <Link href="https://www.instagram.com" target="_blank" className="text-white hover:text-yellow-500 transition duration-300">
                        <FaInstagram size={24} />
                    </Link>
                    <Link href="https://www.youtube.com" target="_blank" className="text-white hover:text-yellow-500 transition duration-300">
                        <FaYoutube size={24} />
                    </Link>
                </div>
                <div className="flex space-x-6">
                    <Link href="/public" className="hover:text-yellow-500 transition duration-300">Beranda</Link>
                    <Link href="/public/article" className="hover:text-yellow-500 transition duration-300">Berita</Link>
                    <Link href="/public/umkm" className="hover:text-yellow-500 transition duration-300">UMKM</Link>
                    <Link href="/public/contact" className="hover:text-yellow-500 transition duration-300">Kontak</Link>
                </div>
            </div>
            <div className="text-center mt-8">
                <p className="text-sm">&copy; {new Date().getFullYear()} Desa Mekarharja. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
