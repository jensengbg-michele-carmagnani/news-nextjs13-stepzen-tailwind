import fetchNews from '../../lib/fetchNews';
import { NewsResponse } from '../../typings';
import NewsList from '../NewsList';

type Props = {
  searchParams?: { term: string };
};

const SearchPage = async ({ searchParams }: Props) => {
  console.log(searchParams?.term);
  const news: NewsResponse = await fetchNews(
    searchParams?.term,
    'technology',
    true
  );

  return (
    <div>
      <h1 className="headerTitle">Search results for : {searchParams?.term}</h1>
      <NewsList news={news} />
    </div>
  );
};

export default SearchPage;
