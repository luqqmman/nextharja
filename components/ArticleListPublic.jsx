'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Loading from '@/components/Loading'


export default function ArticleList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchArticles() {
      const res = await fetch('/api/article', { next: {revalidate: 3600}});
      const data = await res.json();
      setArticles(data);
    }

    fetchArticles();
  }, []);

  if (!articles.length) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto my-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
      {articles.map((article) => (
        <div key={article.id} className="bg-white shadow-md rounded hover:shadow-lg transition-shadow duration-300 mx-4 sm:mx-0">
          {article.imageUrl && (
            <img src={article.imageUrl} alt={article.title} className="w-full h-48 object-cover" />
          )}
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">{article.title}</h2>
            <p className="text-gray-700 mb-4">{article.content.substring(0, 100)}...</p>
            <Link 
                href={`/public/articles/${article.id}`}
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
