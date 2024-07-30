'use client';

import { useState, useEffect } from 'react';
import { FaLightbulb, FaHandshake } from 'react-icons/fa';

const VisiMisi = () => {
    return (
        <section className="relative my-32 py-16 px-4 sm:px-32">
            <div className="container mx-auto relative z-10 space-y-16 hidden md:block">
                {/* Visi Section */}
                <div className="bg-white shadow-lg rounded-lg flex flex-col md:flex-row items-center p-6 md:p-10 hover:shadow-2xl transition-shadow duration-300" data-aos="zoom-in">
                    <div className="flex flex-col items-center justify-center text-center p-6 w-3/12 text-blue-500">
                        <FaLightbulb className="text-6xl mb-6" />
                        <h3 className="text-4xl font-bold mb-4">Visi</h3>
                    </div>
                    <div className="flex-1 flex flex-col justify-center items-center md:items-start text-left px-6 py-6 w-9/12 md:py-0">
                        <p className="text-2xl text-gray-700 mb-2">Dengan Landasan Iman Kita Wujudkan Desa Mekarharja yang Manis (Mandiri, Agamis, dan Inovatif Serta Sejahtera) Tahun 2026</p>
                        {/* <p className="text-lg text-gray-700 mb-2">Desa Mekarharja yang Manis</p>
                        <p className="text-lg text-gray-700 mb-2">(Mandiri, Agamis, dan Inovatif Serta Sejahtera)</p>
                        <p className="text-lg text-gray-700 mb-2">Tahun 2026</p> */}
                    </div>
                </div>
                <div className="border-t border-gray-300 my-8"></div>
                {/* Misi Section */}
                <div className="bg-white shadow-lg rounded-lg flex flex-col md:flex-row items-center p-6 md:p-10 hover:shadow-2xl transition-shadow duration-300" data-aos="zoom-in">
                <div className="flex-1 flex flex-col justify-center items-center md:items-start text-left px-6 py-6 w-9/12 md:py-0">
                        <p className="text-lg text-gray-700 mb-2">1. Meningkatkan Kualitas Sumber Daya Manusia Aparatur Desa dan Masyarakat</p>
                        <p className="text-lg text-gray-700 mb-2">2. Meningkatkan Pengamatan Nilai dan Norma Agama</p>
                        <p className="text-lg text-gray-700 mb-2">3. Menggali dan Mengembangkan Inovasi Masyarakat</p>
                        <p className="text-lg text-gray-700 mb-2">4. Mengembangkan Potensi yang Dimiliki</p>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center p-6 w-3/12 text-blue-500">
                        <FaHandshake className="text-6xl mb-6" />
                        <h3 className="text-4xl font-bold mb-4">Misi</h3>
                    </div>
                </div>
            </div>
            {/* Mobile view Section */}
            <div className="container mx-auto text-center md:hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white shadow-lg rounded-lg px-8 py-6 hover:shadow-2xl transition-shadow duration-300" data-aos="zoom-in">
                        <div className="flex flex-col items-center px-3 sm:px-10 py-10">
                            <FaLightbulb className="text-blue-700 text-6xl mb-6" />
                            <h3 className="text-4xl font-bold text-blue-700 mb-4">Visi</h3>
                            <p className="text-lg text-gray-700 mb-2">Dengan Landasan Iman Kita Wujudkan</p>
                            <p className="text-lg text-gray-700 mb-2">Desa Mekarharja yang Manis</p>
                            <p className="text-lg text-gray-700 mb-2">(Mandiri, Agamis, dan Inovatif Serta Sejahtera)</p>
                            <p className="text-lg text-gray-700 mb-2">Tahun 2026</p>
                        </div>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg px-8 py-6 hover:shadow-2xl transition-shadow duration-300" data-aos="zoom-in">
                        <div className="flex flex-col items-center px-3 sm:px-10 py-10">
                            <FaHandshake className="text-blue-700 text-6xl mb-6" />
                            <h3 className="text-4xl font-bold text-blue-700 mb-4">Misi</h3>
                            <p className="text-lg text-gray-700 mb-2">Meningkatkan Kualitas Sumber Daya Manusia Aparatur Desa dan Masyarakat</p>
                            <p className="text-lg text-gray-700 mb-2">Meningkatkan Pengamatan Nilai dan Norma Agama</p>
                            <p className="text-lg text-gray-700 mb-2">Menggali dan Mengembangkan Inovasi Masyarakat</p>
                            <p className="text-lg text-gray-700 mb-2">Mengembangkan Potensi yang Dimiliki</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VisiMisi;
