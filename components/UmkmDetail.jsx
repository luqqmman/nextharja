'use client';

import { useState, useEffect } from 'react';
import Loading from '@/components/Loading';

export default function UmkmDetail({ params }) {
  const [umkm, setUmkm] = useState(null);
  const { id } = params;

  useEffect(() => {
    async function fetchUmkm() {
      const res = await fetch(`/api/umkm/${id}`);
      const data = await res.json();
      setUmkm(data);
    }

    fetchUmkm();
  }, []);

  if (!umkm) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto my-10 bg-white shadow-md rounded p-10 hover:shadow-lg transition-shadow duration-300">
      <div className="bg-white overflow-hidden">
        {umkm.imageUrl && (
          <img src={umkm.imageUrl} alt={umkm.title} className="w-full h-96 object-cover" />
        )}
        <div className="pt-6">
          <h2 className="text-4xl font-bold mb-2">{umkm.title}</h2>
          <p className="text-gray-500 text-sm">Alamat: {umkm.address}</p>
          <p className="text-gray-700 mt-4">{umkm.content}</p>
        </div>
      </div>
    </div>
  );
}

