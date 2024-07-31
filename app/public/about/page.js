import React from 'react';
import Image from 'next/image'

const AboutUs = () => {
  return (
    <section id="about-us" className="about-us flex items-center mt-24 px-4 sm:px-32 py-24 bg-gray-100">
      <div className="container mx-auto">
        <h3 className="text-3xl font-bold mb-10 text-blue-700 text-center" data-aos="zoom-in">Tentang Kami</h3>
        <div className="bg-white shadow-lg rounded-lg px-8 py-6 my-4">
            Dibuat dengan penuh cinta oleh Mahasiswa KKNT IPB 2024
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
