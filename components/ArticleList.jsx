'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Loading from '@/components/Loading';
import Pagination from '@/components/Pagination';
import Card from '@/components/Card';

export default function ArticleList({isAdmin}) {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const router = useRouter();

  const articlesPerPage = 4;
  const linkPrefix = '/public/article';

  useEffect(() => {
    async function fetchArticles() {
      const res = await fetch('/api/article');
      const data = await res.json();
      setArticles(data);
      setTotalPages(Math.ceil(data.length / articlesPerPage));
    }

    fetchArticles();
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

  return (
    <div className="container mx-auto my-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {currentArticles.map((article) => (
          <Card 
            key={article.id} 
            data={article} 
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
