import { Article, NewsResponse } from '../typings';

export default function sortNewsByImage(news: NewsResponse) {
  // Sort by images
  const newsWithImages = news.data.filter(
    (news: Article) => news.image !== null
  );
  const newsWithoutImages = news.data.filter(
    (news: Article) => news.image === null
  );
  const sortedNewsRespose = {
    pagination: news.pagination,
    data: [...newsWithImages, ...newsWithoutImages],
  };
  return sortedNewsRespose;
}
