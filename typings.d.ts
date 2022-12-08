export type Article = {
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

export type NewsResponse = {
  data: [Article];
  pagination: Pagination;
};
export type Pagination = {
  count: Int;
  limit: Int;
  offset: Int;
  total: Int;
};

export type Category =
  | 'business'
  | 'entertainment'
  | 'general'
  | 'health'
  | 'science'
  | 'sports'
  | 'technology';
