import ArticleDetail from '@/components/ArticleDetail';

export default function ArticlePage({ params }) {
  return (
    <div className="my-8 sm:my-16 mx-4 sm:mx-12 md:mx-32">
      <ArticleDetail params={params} />
    </div>
  );
}

