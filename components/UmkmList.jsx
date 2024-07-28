'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Loading from '@/components/Loading';
import Pagination from '@/components/Pagination';
import Card from '@/components/Card';

export default function UmkmList({ isAdmin }) {
  const [umkmList, setUmkmList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const router = useRouter();

  const umkmsPerPage = 4;
  const linkPrefix = '/public/umkm';


  useEffect(() => {
    async function fetchUmkm() {
      const res = await fetch('/api/umkm');
      const data = await res.json();
      setUmkmList(data);
      setTotalPages(Math.ceil(data.length / umkmsPerPage));
    }

    fetchUmkm();
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleDelete = async (id) => {
    const confirmed = confirm('Are you sure you want to delete this umkm?');
    if (confirmed) {
      const res = await fetch(`/api/umkm/${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        setUmkmList(umkmList.filter(umkm => umkm.id !== id));
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

  const indexOfLastUmkm = currentPage * umkmsPerPage;
  const indexOfFirstUmkm = indexOfLastUmkm - umkmsPerPage;
  const currentUmkms = umkmList.slice(indexOfFirstUmkm, indexOfLastUmkm);

  return (
    <div className="container mx-auto my-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {currentUmkms.map((umkm) => (
          <Card 
            key={umkm.id} 
            data={umkm} 
            linkPrefix={linkPrefix}
            isAdmin={isAdmin}
            editHandler={handleEdit} 
            deleteHandler={handleDelete}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
