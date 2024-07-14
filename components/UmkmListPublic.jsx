'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Loading from '@/components/Loading'


export default function UmkmList() {
  const [umkmList, setUmkmList] = useState([]);

  useEffect(() => {
    async function fetchUmkm() {
      const res = await fetch('/api/umkm', { next: {revalidate: 3600}});
      const data = await res.json();
      setUmkmList(data);
    }

    fetchUmkm();
  }, []);

  if (!umkmList.length) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto my-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
      {umkmList.map((umkm) => (
        <div key={umkm.id} className="bg-white shadow-md rounded hover:shadow-lg transition-shadow duration-300 mx-4 sm:mx-0">
          {umkm.imageUrl && (
            <img src={umkm.imageUrl} alt={umkm.title} className="w-full h-48 object-cover" />
          )}
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">{umkm.title}</h2>
            <p className="text-gray-700 mb-4">{umkm.content.substring(0, 100)}...</p>
            <Link 
                href={`/public/umkm/${umkm.id}`}
                className="text-blue-500 hover:text-blue-700 font-bold"
            >
              Read More
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
