'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import Loading from '@/components/Loading'

export default function ArticleList() {
  const [articles, setArticles] = useState([]);
  const router = useRouter();

  useEffect(() => {
    async function fetchArticles() {
      const res = await fetch('/api/article');
      const data = await res.json();
      setArticles(data);
    }

    fetchArticles();
  }, []);

  const handleDelete = async (id) => {
    const confirmed = confirm('Are you sure you want to delete this article?');
    if (confirmed) {
      const res = await fetch(`/api/article/${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        setArticles(articles.filter(article => article.id !== id));
      } else {
        console.error('Error deleting article');
      }
    }
  };

  const handleEdit = (id) => {
    router.push(`/admin/edit-article/${id}`);
  };

  if (!articles.length) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto my-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
      {articles.map((article) => (
        <div key={article.id} className="bg-white shadow-md rounded p-4 hover:shadow-lg transition-shadow duration-300 mx-4 sm:mx-0">
          {article.imageUrl && (
            <img src={article.imageUrl} alt={article.title} className="w-full h-48 object-cover" />
          )}
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">{article.title}</h2>
            <p className="text-gray-700 mb-4">{article.content.substring(0, 100)}...</p>
            <div className="mt-2 flex space-x-2">
              <button
                onClick={() => handleEdit(article.id)}
                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(article.id)}
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


