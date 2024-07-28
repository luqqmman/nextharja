'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
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
    <div className="container mx-auto my-10 bg-white shadow-md rounded p-8 hover:shadow-lg transition-shadow duration-300">
      <div className="bg-white overflow-hidden">
        {article.imageUrl && (
          <Image
            src={article.imageUrl} 
            alt={article.title} 
            className="w-full h-96 object-cover" 
            width="384"
            height="216"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOUc1hfDwADHwGOaA8MGQAAAABJRU5ErkJggg=="
          />
          
        )}
        <div className="pt-6">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">{article.title}</h2>
          <p className="text-gray-500 text-sm mb-4">Tanggal kegiatan: {article.date}</p>
          <p className="text-justify text-gray-700 mb-4 whitespace-pre-line">{article.content}</p>
        </div>
      </div>
    </div>
  );
}
