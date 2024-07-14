'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function EditArticle({ params }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');
  const [image, setImage] = useState(null);
  const [existingImage, setExistingImage] = useState('');
  const router = useRouter();
  const { id } = params;

  useEffect(() => {
    async function fetchArticle() {
      const res = await fetch(`/api/article/${id}`);
      const data = await res.json();
      setTitle(data.title);
      setContent(data.content);
      setDate(data.date);
      setExistingImage(data.imageUrl);
    }

    fetchArticle();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('date', date);
    if (image) {
      formData.append('image', image);
    }

    const res = await fetch(`/api/article/${id}`, {
      method: 'PUT',
      body: formData,
    });

    if (res.ok) {
      router.push('/');
    } else {
      console.error('Error updating article');
    }
  };

  return (
    <div className="container mx-auto w-full max-w-l">
      <form className="px-10 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <h1 className="text-3xl font-bold mb-6">Edit Article</h1>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            placeholder="Title"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
            Content
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="content"
            placeholder="Content"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
            Date
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="date"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
            Image
          </label>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="image"
          />
          {existingImage && <img src={existingImage} alt="Article" className="w-full h-auto mt-2" />}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
}
