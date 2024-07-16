import React from 'react';
import Link from 'next/link';

const Eksplorasi = () => {
  return (
    <section className="flex items-center mt-24 px-4 py-24 bg-gradient-to-tr from-blue-500 to-blue-700" id="eksplorasi">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold mb-10 text-white" data-aos="zoom-in">Eksplorasi</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
          <div
            className="bg-white shadow-lg rounded-lg px-8 py-6 hover:shadow-2xl transition-shadow duration-300 my-4 transform hover:-translate-y-2"
            data-aos="fade-left"
          >
            <div className="p-2 sm:p-6">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Berita</h3>
              <div className="p-6">
                <img
                  src="/mekarharja.png"
                  alt="Berita Desa"
                  className="w-full h-48 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                />
              </div>
              <p className="text-gray-600 my-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, excepturi harum culpa eveniet cupiditate repudiandae in cum dicta? Eaque accusamus exercitationem ea incidunt aspernatur minus distinctio asperiores odit iste maiores?
              </p>
              <Link 
                className="text-blue-500 hover:text-blue-700 font-bold flex items-center justify-center"
                href="/public/articles">
                  <span className="mr-2">Baca Selengkapnya</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
              </Link>
            </div>
          </div>
          <div
            className="bg-white shadow-lg rounded-lg px-8 py-6 hover:shadow-2xl transition-shadow duration-300 my-4 transform hover:-translate-y-2"
            data-aos="fade-right"
          >
            <div className="p-2 sm:p-6">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">UMKM</h3>
              <div className="p-6">
                <img
                  src="/mekarharja.png"
                  alt="UMKM Desa"
                  className="w-full h-48 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                />
              </div>
              <p className="text-gray-600 my-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, excepturi harum culpa eveniet cupiditate repudiandae in cum dicta? Eaque accusamus exercitationem ea incidunt aspernatur minus distinctio asperiores odit iste maiores?
              </p>
              <Link 
                className="text-blue-500 hover:text-blue-700 font-bold flex items-center justify-center"
                href="/public/umkm">
                  <span className="mr-2">Baca Selengkapnya</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Eksplorasi;
