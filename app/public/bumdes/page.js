import Image from "next/image";
import Link from "next/link";

export default function ArticlesPage() {
  return (
    <div className="mx-2 sm:mx-12 md:mx-28 my-16">
      <h1 className="text-4xl font-bold text-center my-10">Bumdes</h1>

      <div className="container mx-auto my-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

          <div className="bg-white shadow-md rounded hover:shadow-lg transition-shadow duration-300 mx-4 sm:mx-0">
              <Image 
                src="/bmp-net1.png" 
                alt="BMPNET" 
                className="w-full h-64 object-cover" 
                width="256"
                height="144"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOUc1hfDwADHwGOaA8MGQAAAABJRU5ErkJggg=="
              />

            <div className="p-6 flex flex-col justify-between">
              <h2 className="text-xl font-bold mb-2">BMP.NET</h2>
              <p className="text-gray-700 mb-4 text-sm">
              Jl. Balai Desa No.228, Mekarharja, Kec. Purwaharja, Kota Banjar, Jawa Barat 46333
              </p>
              <p className="text-gray-700 mb-4">
              BMP NET menyediakan layanan jasa wifi dengan kecepatan tinggi dan jangkauan luas di Desa Mekarharja. Layanan ini bertujuan untuk memudahkan akses internet bagi masyarakat desa, mendukung kegiatan belajar, bekerja, dan hiburan.
              </p>

                  <Link 
                      href="https://bmpnet.id"
                      className="text-blue-500 hover:text-blue-700 font-bold"
                  >
                      Baca Selengkapnya
                  </Link>
            </div>
          </div>

          <div className="bg-white shadow-md rounded hover:shadow-lg transition-shadow duration-300 mx-4 sm:mx-0">
              <Image 
                src="/tb.png" 
                alt="Toko Bangunan" 
                className="w-full h-64 object-cover" 
                width="256"
                height="144"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOUc1hfDwADHwGOaA8MGQAAAABJRU5ErkJggg=="
              />

            <div className="p-6 flex flex-col justify-between">
              <h2 className="text-xl font-bold mb-2">Toko Material Bangunan dan Alat Listrik</h2>
              <p className="text-gray-700 mb-4 text-sm">
                Dusun Cibentang, RT.011/RW.006, Mekarharja, Kec. Purwaharja, Kota Banjar, Jawa Barat
              </p>
              <p className="text-gray-700 mb-4">
                Toko Bangunan Material di Desa Mekarharja menyediakan berbagai kebutuhan bahan bangunan, mulai dari semen, pasir, batu bata, hingga alat-alat konstruksi. Toko ini bertujuan untuk memudahkan akses bahan bangunan bagi warga desa dan mendukung pembangunan infrastruktur lokal.
              </p>


                  <Link 
                      href="#"
                      className="text-blue-500 hover:text-blue-700 font-bold"
                  >
                      Baca Selengkapnya
                  </Link>
            </div>
          </div>

          <div className="bg-white shadow-md rounded hover:shadow-lg transition-shadow duration-300 mx-4 sm:mx-0">
              <Image 
                src="/tps3r.png" 
                alt="tps3r" 
                className="w-full h-64 object-cover" 
                width="256"
                height="144"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOUc1hfDwADHwGOaA8MGQAAAABJRU5ErkJggg=="
              />

            <div className="p-6 flex flex-col justify-between">
              <h2 className="text-xl font-bold mb-2">TPS3R</h2>
              <p className="text-gray-700 mb-4 text-sm">
                Jl. Pasirleutik No.151, Raharja, Kec. Purwaharja, Kota Banjar, Jawa Barat 46334
              </p>
              <p className="text-gray-700 mb-4">
                TPS3R Desa Mekarharja adalah inisiatif untuk mengelola sampah secara terpadu dengan prinsip reduce, reuse, dan recycle. Program ini bertujuan untuk menjaga kebersihan lingkungan, mengurangi volume sampah yang dibuang ke TPA, dan memanfaatkan kembali bahan yang masih memiliki nilai guna.
              </p>

                  <Link 
                      href="#"
                      className="text-blue-500 hover:text-blue-700 font-bold"
                  >
                      Baca Selengkapnya
                  </Link>
            </div>
          </div>
          

          

        </div>
      </div>

    </div>
  );
}
