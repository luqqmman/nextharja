'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import Loading from '@/components/Loading'

export default function umkmList() {
  const [umkmList, setumkmList] = useState([]);
  const router = useRouter();

  useEffect(() => {
    async function fetchumkmList() {
      const res = await fetch('/api/umkm');
      const data = await res.json();
      setumkmList(data);
    }

    fetchumkmList();
  }, []);

  const handleDelete = async (id) => {
    const confirmed = confirm('Are you sure you want to delete this umkm?');
    if (confirmed) {
      const res = await fetch(`/api/umkm/${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        setumkmList(umkmList.filter(umkm => umkm.id !== id));
      } else {
        console.error('Error deleting umkm');
      }
    }
  };

  const handleEdit = (id) => {
    router.push(`/admin/edit-umkm/${id}`);
  };

  if (!umkmList.length) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto my-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
      {umkmList.map((umkm) => (
        <div key={umkm.id} className="bg-white shadow-md rounded p-4 hover:shadow-lg transition-shadow duration-300 mx-4 sm:mx-0">
          {umkm.imageUrl && (
            <img src={umkm.imageUrl} alt={umkm.title} className="w-full h-48 object-cover" />
          )}
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">{umkm.title}</h2>
            <p className="text-gray-700 mb-4">{umkm.content.substring(0, 100)}...</p>
            <div className="mt-2 flex space-x-2">
              <button
                onClick={() => handleEdit(umkm.id)}
                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(umkm.id)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}


