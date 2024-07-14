import React from 'react';

const Berita = () => {
    return (
        <section className="bg-white py-8 flex items-center my-32 p-10">
            <div className="container mx-auto text-center">
                <h3 className="text-3xl font-bold">Artikel Terbaru</h3>
                <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="bg-gray-200 p-4 rounded shadow text-left p-8">
                        <h2 className="text-2xl font-bold">Pertemuan RT RW</h2>
                        <p className="my-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco lnostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat.</p>
                    </div>
                    <div className="bg-gray-200 p-4 rounded shadow">
                        <img src="./images/heros.jpg" alt="Map" className="w-full h-64 object-cover" />
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Berita;