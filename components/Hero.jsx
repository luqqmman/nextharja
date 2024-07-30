import Link from 'next/link'

const Hero = () => {
    return (
<section 
    className="hero-section bg-blue-800 text-white p-10 sm:p-28 h-192 relative flex items-center justify-center"
>
    {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-600 opacity-75"></div> */}
    <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center h-full relative z-10 mt-24 sm:mt-0" data-aos="fade-up">
        <div>
            <h1 className="text-4xl sm:text-5xl font-bold drop-shadow-md my-8">DESA MEKARHARJA</h1>
            <p className="mt-4 max-w-lg text-lg drop-shadow-md">
                Selamat datang di Desa Mekarharja, sebuah desa yang penuh dengan keindahan alam dan kekayaan budaya. Kami mengundang Anda untuk menjelajahi pesona desa kami, dari hamparan sawah yang hijau hingga keramahan penduduk yang selalu siap menyambut.
            </p>
            <Link 
                href="#eksplorasi">
                <button action="/public/#eksplorasi" className="mt-8 px-6 py-3 bg-yellow-500 text-blue-800 font-bold rounded shadow-lg hover:bg-yellow-400 transition duration-300">Selengkapnya</button>
            </Link>
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