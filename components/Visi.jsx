import React from 'react';

const Visi = () => {
    return (

<section className="py-8 flex items-center my-32 p-10">
    <div className="container mx-auto text-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
            <div className="bg-white shadow-lg rounded-lg px-8 py-6 hover:shadow-2xl transition-shadow duration-300 my-4" data-aos="fade-left">
                <section 
                    className="flex items-center px-3 sm:px-10 py-10" 
                    data-aos="zoom-in"
                    data-aos-offset="300"
                >
                    <div className="container mx-auto text-center">
                        <h3 className="text-4xl font-bold text-blue-700">Visi</h3>
                        <p className="text-lg mt-12 text-gray-700">Dengan Landasan Iman Kita Wujudkan </p>
                        <p className="text-lg text-gray-700">Desa Mekarharja yang Manis</p>
                        <p className="text-lg text-gray-700">(Mandiri, Agamis, dan Inovatif Serta Sejahtera) </p>
                        <p className="text-lg text-gray-700">Tahun 2026</p>
                    </div>
                </section>
            </div>
            <div className="bg-white shadow-lg rounded-lg px-8 py-6 hover:shadow-2xl transition-shadow duration-300 my-4" data-aos="fade-right">
                <section 
                    className="flex items-center px-3 sm:px-10 py-10" 
                    data-aos="zoom-in"
                    data-aos-offset="300"
                >
                    <div className="container mx-auto text-center">
                        <h3 className="text-4xl font-bold text-blue-700">Misi</h3>
                        <p className="text-lg mt-6 text-gray-700">Meningkatkan Kualitas Sumber Daya Manusia Aparatur Desa dan Masyarakat</p>
                        <p className="text-lg text-gray-700">Meningkatkan Pengamatan Nilai dan Norma Agama</p>
                        <p className="text-lg text-gray-700">Menggali dan Mengembangkan Inovasi Masyarakat </p>
                        <p className="text-lg text-gray-700">Mengembangkan Potensi yang Dimiliki</p>
                    </div>
                </section>
            </div>
        </div>
    </div>
</section>

    )
};

export default Visi;