'use client';

import { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import PageDesktop from '@/components/StrukturDesa/PageDesktop';
import Card from '@/components/StrukturDesa/Card';
import PerangkatDesa from '@/components/StrukturDesa/PerangkatDesa';

const StrukturDesa = () => {
  const [page, setPage] = useState(0);
  const [pageMobile, setPageMobile] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const page1 = [0, 2, 3, 4];
  const page2 = [1, 5, 7, 6];
  const page3 = [0, 8, 9, 10];

  const CardList = PerangkatDesa.map((item, index) => (
    <Card
      key={index}
      imgSrc={item.imgSrc}
      position={item.position}
      name={item.name}
      view={index}
      currentPage={pageMobile}
    />
  ));

  useEffect(() => {
    // Fungsi untuk memeriksa ukuran jendela
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1040); // 1024px adalah breakpoint untuk ukuran layar desktop
    };

    // Setel event listener untuk perubahan ukuran jendela
    window.addEventListener('resize', checkMobile);
    // Periksa ukuran jendela saat komponen pertama kali dirender
    checkMobile();

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPage(prevPage => (prevPage + 1) % 3);
      setPageMobile(prevPage => (prevPage + 1) % 10);
    }, 5000); // Ganti halaman setiap 5 detik

    return () => clearInterval(interval); // Bersihkan interval saat komponen unmount
  }, []);

  const renderDesktopPage = () => {
    switch (page) {
      case 0:
        return <PageDesktop key={0} ls={page1} view={0} page={page} />;
      case 1:
        return <PageDesktop key={1} ls={page2} view={1} page={page} />;
      case 2:
        return <PageDesktop key={2} ls={page3} view={2} page={page} />;
      default:
        return <PageDesktop key={0} ls={page1} view={0} page={page} />;
    }
  };

  const renderMobilePage = () => {
    return CardList[pageMobile];
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handlePageMobileChange = (newPage) => {
    setPageMobile(newPage);
  };

  return (
    <section className="struktur-section bg-gray-100 flex items-center my-32 px-10 py-28 md:py-16">
      <div className="container flex flex-col mx-auto items-center text-center parallax-content">
        <h3 className="text-gray-100 text-3xl font-bold mb-10 text-black" data-aos="zoom-in">Perangkat Desa</h3>

          {isMobile ? renderMobilePage() : renderDesktopPage()}

        <div className="mt-4 flex justify-center space-x-4">
          {isMobile ? (
            <>
              <button
                onClick={() => handlePageMobileChange(pageMobile === 0 ? 10 : pageMobile - 1)}
                className="sm:hidden text-gray-100 bg-transparent hover:bg-blue-500 px-4 py-2 rounded-full shadow flex items-center space-x-2 transition duration-300 ease-in-out transform hover:-translate-x-1 hover:scale-105">
                <FaArrowLeft />
              </button>
              <button
                onClick={() => handlePageMobileChange(pageMobile === 10 ? 0 : pageMobile + 1)}
                className="sm:hidden text-gray-100 bg-transparent hover:bg-blue-500 px-4 py-2 rounded-full shadow flex items-center space-x-2 transition duration-300 ease-in-out transform hover:translate-x-1 hover:scale-105">
                <FaArrowRight />
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => handlePageChange(page === 0 ? 2 : page - 1)}
                className="hidden sm:block text-gray-100 bg-transparent hover:bg-blue-500 px-4 py-2 rounded-full shadow flex items-center space-x-2 transition duration-300 ease-in-out transform hover:-translate-x-1 hover:scale-105">
                <FaArrowLeft />
              </button>
              <button
                onClick={() => handlePageChange(page === 2 ? 0 : page + 1)}
                className="hidden sm:block text-gray-100 bg-transparent hover:bg-blue-500 px-4 py-2 rounded-full shadow flex items-center space-x-2 transition duration-300 ease-in-out transform hover:translate-x-1 hover:scale-105">
                <FaArrowRight />
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default StrukturDesa;
