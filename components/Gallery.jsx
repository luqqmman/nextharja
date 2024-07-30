'use client';

import { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Loading from '@/components/Loading'

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      const res = await fetch('/api/gallery');
      const data = await res.json();
      setImages(data);
    };

    fetchImages();
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  if (images.length === 0) return <Loading />;

  return (
    <div className="container mx-auto my-10 bg-white shadow-md rounded p-4 sm:p-8 hover:shadow-lg transition-shadow duration-300">
        <div className="container flex flex-col mx-auto items-center text-center">
            <h3 className="text-2xl sm:text-4xl font-bold my-10 text-black" data-aos="zoom-in">Galeri Desa</h3>
            <img src={images[currentIndex]} alt="Gallery" className="w-full max-h-screen object-cover" data-aos="zoom-in" />


            <div className="mt-8 flex justify-center space-x-8">
                <button
                    onClick={handlePrev}
                    className="text-blue-500 text-2xl bg-transparent hover:bg-gray-200 px-4 py-2 rounded-full shadow flex items-center space-x-2 transition duration-300 ease-in-out transform hover:-translate-x-1 hover:scale-105">
                    <FaArrowLeft />
                </button>
                <button
                    onClick={handleNext}
                    className="text-blue-500 text-2xl bg-transparent hover:bg-gray-200 px-4 py-2 rounded-full shadow flex items-center space-x-2 transition duration-300 ease-in-out transform hover:translate-x-1 hover:scale-105">
                    <FaArrowRight />
                </button>
            </div>
        </div>
    </div>
  );
};

export default Gallery;