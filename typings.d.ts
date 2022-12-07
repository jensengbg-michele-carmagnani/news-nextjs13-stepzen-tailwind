type NewsResponse = {
  pagination: Pagination;
  data: Article[];
};
type Pagination = {
  count: Int;
  limit: Int;
  offset: Int;
  total: Int;
};
type Article = {
  author: string | null;
  category: Category;
  country: Country;
  description: string;
  image: string | null;
  language: string;
  published_at: string;
  source: string;
  title: string;
  url: string;
};

type Category =
  | 'business'
  | 'entertainment'
  | 'general'
  | 'health'
  | 'science'
  | 'sports'
  | 'technology';
