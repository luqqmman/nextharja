'use client';

import { useState, useEffect } from 'react';
import Loading from '@/components/Loading'

export default function ArticleDetail({ params }) {
  const [article, setArticle] = useState(null);
  const { id } = params;

  useEffect(() => {
    async function fetchArticle() {
      const res = await fetch(`/api/article/${id}`);
      const data = await res.json();
      setArticle(data);
    }

    fetchArticle();
  }, [id]);

  if (!article) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto my-10 bg-white shadow-md rounded p-10 hover:shadow-lg transition-shadow duration-300">
      <div className="bg-white overflow-hidden">
        {article.imageUrl && (
          <img src={article.imageUrl} alt={article.title} className="w-full h-96 object-cover" />
        )}
        <div className="pt-6">
          <h2 className="text-4xl font-bold mb-2">{article.title}</h2>
          <p className="text-gray-700 mb-4">{article.content}</p>
          <p className="text-gray-500 text-sm">Tanggal kegiatan: {article.date}</p>
        </div>
      </div>
    </div>
  );
}
