import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Link from 'next/link';

const Kontak = () => {
    return (
        <section id="kontak" className="kontak flex items-center mt-24 px-4 sm:px-32 py-24 bg-gray-100">
            <div className="container mx-auto text-center">
                <h3 className="text-3xl font-bold mb-10 text-blue-700" data-aos="zoom-in">Kontak Kami</h3>
                <div className="bg-white shadow-lg rounded-lg px-8 py-6 my-4">
                    <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
                        <div className="text-center sm:text-left mb-4 sm:mb-0">
                            <FaPhone className="text-blue-700 text-4xl mb-2" />
                            <p className="text-gray-600">Telepon</p>
                            <p className="font-bold text-gray-800">(021) 1234 5678</p>
                        </div>
                        <div className="text-center sm:text-left mb-4 sm:mb-0">
                            <FaEnvelope className="text-blue-700 text-4xl mb-2" />
                            <p className="text-gray-600">Email</p>
                            <p className="font-bold text-gray-800">info@mekarharja.desa.id</p>
                        </div>
                        <div className="text-center sm:text-left">
                            <FaMapMarkerAlt className="text-blue-700 text-4xl mb-2" />
                            <p className="text-gray-600">Alamat</p>
                            <p className="font-bold text-gray-800">Jl. Balai Desa No.228, Mekarharja, Kec. Purwaharja, Kota Banjar, Jawa Barat 46333</p>
                        </div>
                    </div>
                    <div className="text-blue-400 flex space-x-6 mb-4 md:mb-0">
                        <Link href="https://www.facebook.com/desamekarharja?mibextid=FqQbvRVe40gbju2b" target="_blank" className="text-white hover:text-yellow-500 transition duration-300">
                            <FaFacebookF size={24} className="text-blue-700" /> 
                        </Link>
                        <Link href="https://www.twitter.com" target="_blank" className="text-white hover:text-yellow-500 transition duration-300">
                            <FaTwitter size={24}  className="text-blue-700" />
                        </Link>
                        <Link href="https://www.instagram.com/desamekarharja12?igsh=MWNmOWkyaWJiYTJzZA==" target="_blank" className="text-white hover:text-yellow-500 transition duration-300">
                            <FaInstagram size={24}  className="text-blue-700" />
                        </Link>
                        <Link href="https://youtube.com/@desamekarharjaku?si=t4xsTkDD9X9Zk2y-" target="_blank" className="text-white hover:text-yellow-500 transition duration-300">
                            <FaYoutube size={24} className="text-blue-700"  />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Kontak;
