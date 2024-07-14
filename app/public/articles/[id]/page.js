import ArticleDetail from '@/components/ArticleDetail';

export default function ArticlePage({ params }) {
  return (
    <div className="mt-16 mb-24">
      <ArticleDetail params={params} />
    </div>
  );
}

