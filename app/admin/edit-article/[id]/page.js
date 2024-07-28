import ArticleEdit from "@/components/ArticleEdit";

export default function EditArticlePage({ params }) {
  return (
    <div className="container mx-auto my-10">
      <ArticleEdit params={params} />
    </div>
  );
}
