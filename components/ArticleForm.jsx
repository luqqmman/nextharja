'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Loading from '@/components/Loading';

export default function ArticleForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState(false);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('date', date);
    
    if (image) {
      formData.append('image', image);
    }

    const res = await fetch('/api/article', {
      method: 'POST',
      body: formData,
    });

    if (res.ok) {
      setLoading(false);
      console.log('Article added successfully');
      router.push('/admin/article');
    } else {
      setLoading(false);
      alert(res);
      console.error(res);
    }
  };

  if (loading) {
    return <Loading />
  }

  return (
    <div className="container mx-auto my-10 w-full max-w-l">
        <form className="px-10 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
            <h1 className="text-3xl font-bold">Dokumentasi Baru</h1>
            <div className="my-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" for="title">
                Judul
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="title" 
                placeholder="Judul" 
              />
            </div>
            <div className="my-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" for="title">
                Tanggal
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="tanggal" 
                placeholder="Tanggal" 
              />
            </div>
            <div className="my-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                Gambar
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="image"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" for="content">
                Deskripsi
              </label>
              <textarea 
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                id="content" 
                placeholder="Deskripsi"
              />                        
            </div>
            <div className="flex items-center justify-between">
                <button 
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                  type="submit">
                  Posting
                </button>
            </div>
        </form>
    </div>
  );
};