const handleDeleteArticle = async (id) => {
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

const handleEditArticle = (id) => {
    router.push(`/admin/edit-article/${id}`);
};

export { handleDeleteArticle, handleEditArticle }