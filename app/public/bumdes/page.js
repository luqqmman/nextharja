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
                src="/mekarharja.png" 
                alt="BMPNET" 
                className="w-full h-64 object-cover" 
                width="256"
                height="144"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOUc1hfDwADHwGOaA8MGQAAAABJRU5ErkJggg=="
              />

            <div className="p-6 flex flex-col justify-between">
              <h2 className="text-xl font-bold mb-2">BMP.NET</h2>
              <p className="text-gray-700 mb-4">........</p>

                  <Link 
                      href="/public/bumdes/bmpnet"
                      className="text-blue-500 hover:text-blue-700 font-bold"
                  >
                      Baca Selengkapnya
                  </Link>
            </div>
          </div>

          <div className="bg-white shadow-md rounded hover:shadow-lg transition-shadow duration-300 mx-4 sm:mx-0">
              <Image 
                src="/mekarharja.png" 
                alt="BMPNET" 
                className="w-full h-64 object-cover" 
                width="256"
                height="144"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOUc1hfDwADHwGOaA8MGQAAAABJRU5ErkJggg=="
              />

            <div className="p-6 flex flex-col justify-between">
              <h2 className="text-xl font-bold mb-2">Meterial</h2>
              <p className="text-gray-700 mb-4">.....</p>

                  <Link 
                      href="/public/bumdes/bmpnet"
                      className="text-blue-500 hover:text-blue-700 font-bold"
                  >
                      Baca Selengkapnya
                  </Link>
            </div>
          </div>

          <div className="bg-white shadow-md rounded hover:shadow-lg transition-shadow duration-300 mx-4 sm:mx-0">
              <Image 
                src="/mekarharja.png" 
                alt="BMPNET" 
                className="w-full h-64 object-cover" 
                width="256"
                height="144"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOUc1hfDwADHwGOaA8MGQAAAABJRU5ErkJggg=="
              />

            <div className="p-6 flex flex-col justify-between">
              <h2 className="text-xl font-bold mb-2">TPS3R</h2>
              <p className="text-gray-700 mb-4">.........</p>

                  <Link 
                      href="/public/bumdes/bmpnet"
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
