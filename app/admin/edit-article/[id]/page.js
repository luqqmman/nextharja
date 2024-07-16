import EditArticle from '@/components/EditArticle';

export default function EditArticlePage({ params }) {
  return (
    <div className="container mx-auto my-10">
      <EditArticle params={params} />
    </div>
  );
}
