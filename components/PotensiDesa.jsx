import React from 'react';
import Link from 'next/link';
import { FaArrowRight, FaNewspaper, FaStore, FaImages, FaBuilding } from 'react-icons/fa';

const Eksplorasi = () => {
  return (
    <section id="eksplorasi" className="eksplorasi flex items-center mt-24 px-4 sm:px-32 py-24 bg-gradient-to-tr from-blue-500 to-blue-700">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold mb-10 text-white" data-aos="zoom-in">Eksplorasi</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-8">
          <div
            className="bg-white shadow-lg rounded-lg px-8 py-6 hover:shadow-2xl transition-shadow duration-300 my-4 sm:my-0 transform hover:-translate-y-2"
            data-aos="zoom-in"
          >
            <div className="p-2 sm:p-6">
              <div className="flex justify-center mb-6">
                <FaNewspaper className="text-blue-700 text-6xl" />
              </div>
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Berita</h3>
              <p className="text-gray-600 my-4">
                Temukan kegiatan terbaru dari Desa Mekarharja, mulai dari kegiatan masyarakat, perkembangan infrastruktur, hingga program-program inovatif yang dijalankan oleh pemerintah desa.
              </p>
              <Link 
                className="text-blue-500 hover:text-blue-700 font-bold flex items-center justify-center"
                href="/public/article">
                  <span className="mr-2">Baca Selengkapnya</span>
                  <FaArrowRight />
              </Link>
            </div>
          </div>

          <div
            className="bg-white shadow-lg rounded-lg px-8 py-6 hover:shadow-2xl transition-shadow duration-300 my-4 sm:my-0  transform hover:-translate-y-2"
            data-aos="zoom-in"
          >
            <div className="p-2 sm:p-6">
              <div className="flex justify-center mb-6">
                <FaStore className="text-blue-700 text-6xl" />
              </div>
              <h3 className="text-2xl font-bold text-blue-700 mb-4">UMKM</h3>
              <p className="text-gray-600 my-4">
                Jelajahi produk-produk unggulan dari UMKM di Desa Mekarharja, yang mencakup kerajinan tangan, kuliner khas, dan berbagai inovasi lokal yang mendukung ekonomi kreatif masyarakat desa.
              </p>
              <Link 
                className="text-blue-500 hover:text-blue-700 font-bold flex items-center justify-center"
                href="/public/umkm">
                  <span className="mr-2">Baca Selengkapnya</span>
                  <FaArrowRight />
              </Link>
            </div>
          </div>

          <div
            className="bg-white shadow-lg rounded-lg px-8 py-6 hover:shadow-2xl transition-shadow duration-300 my-4 sm:my-0  transform hover:-translate-y-2"
            data-aos="zoom-in"
          >
            <div className="p-2 sm:p-6">
              <div className="flex justify-center mb-6">
                <FaBuilding className="text-blue-700 text-6xl" />
              </div>
              <h3 className="text-2xl font-bold text-blue-700 mb-4">BUMDES</h3>
              <p className="text-gray-600 my-4">
                Pelajari lebih lanjut tentang Badan Usaha Milik Desa (BUMDES) Mekarharja yang mengelola berbagai usaha untuk meningkatkan kesejahteraan masyarakat melalui kegiatan ekonomi produktif.
              </p>
              <Link 
                className="text-blue-500 hover:text-blue-700 font-bold flex items-center justify-center"
                href="/public/bumdes">
                  <span className="mr-2">Baca Selengkapnya</span>
                  <FaArrowRight />
              </Link>
            </div>
          </div>

          <div
            className="bg-white shadow-lg rounded-lg px-8 py-6 hover:shadow-2xl transition-shadow duration-300 my-4 sm:my-0  transform hover:-translate-y-2"
            data-aos="zoom-in"
          >
            <div className="p-2 sm:p-6">
              <div className="flex justify-center mb-6">
                <FaImages className="text-blue-700 text-6xl" />
              </div>
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Galeri</h3>
              <p className="text-gray-600 my-4">
                Lihat berbagai foto dan video kegiatan, pemandangan, dan budaya Desa Mekarharja yang menggambarkan yang diabadikan sebagai kenang-kenangan mahasiswa KKNT IPB.
              </p>
              <Link 
                className="text-blue-500 hover:text-blue-700 font-bold flex items-center justify-center"
                href="/public/gallery">
                  <span className="mr-2">Lihat Galeri</span>
                  <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Eksplorasi;
