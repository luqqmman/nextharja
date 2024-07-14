import React from 'react';

const Hero = () => {
    return (
<section 
    className="hero-section bg-blue-800 text-white p-10 h-128 relative flex items-center justify-center"
>
    <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-600 opacity-75"></div>
    <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center h-full relative z-10" data-aos="fade-up">
        <div>
            <h1 className="text-5xl font-bold drop-shadow-md">DESA MEKARHARJA</h1>
            <p className="mt-4 max-w-lg text-lg drop-shadow-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <button action="/public/#eksplorasi" className="mt-6 px-6 py-3 bg-yellow-500 text-blue-800 font-bold rounded shadow-lg hover:bg-yellow-400 transition duration-300">Selengkapnya</button>
        </div>
        <div className="mt-8 lg:mt-0 grid grid-cols-3 gap-4" data-aos="fade-up">
            {/* <img src="photo1.jpg" alt="Photo 1" className="h-32 w-32 object-cover rounded-md shadow-lg transform hover:scale-105 transition duration-300">
            <img src="photo2.jpg" alt="Photo 2" className="h-32 w-32 object-cover rounded-md shadow-lg transform hover:scale-105 transition duration-300">
            <img src="photo3.jpg" alt="Photo 3" className="h-32 w-32 object-cover rounded-md shadow-lg transform hover:scale-105 transition duration-300">
            <img src="photo4.jpg" alt="Photo 4" className="h-32 w-32 object-cover rounded-md shadow-lg transform hover:scale-105 transition duration-300">
            <img src="photo5.jpg" alt="Photo 5" className="h-32 w-32 object-cover rounded-md shadow-lg transform hover:scale-105 transition duration-300">
            <img src="photo6.jpg" alt="Photo 6" className="h-32 w-32 object-cover rounded-md shadow-lg transform hover:scale-105 transition duration-300"> */}
        </div>
    </div>
</section>
    )
}

export default Hero