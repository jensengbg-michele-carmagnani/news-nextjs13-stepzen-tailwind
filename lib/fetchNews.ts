import { Category } from './../typings.d';
import { gql } from 'graphql-request';
import sortNewsByImage from './soartNewsByImage';
const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {
  // ...graphql query
  const query = gql`
    query MyQuery(
      $access_key: String!
      $categories: String
      $keywords: String
    ) {
      myQuery(
        access_key: $access_key
        categories: $categories
        countries: "us,it,gb,se"
        sort: "published_desc"
        keywords: $keywords
      ) {
        data {
          author
          category
          country
          description
          image
          language
          published_at
          source
          title
          url
        }
        pagination {
          count
          limit
          offset
          total
        }
      }
    }
  `;

  // fetch with nextjs 13 with isg
  const res = await fetch(
    'https://hallesaale.stepzen.net/api/exegetical-turkey/__graphql',
    {
      method: 'POST',
      cache: isDynamic ? 'no-cache' : 'default',
      next: isDynamic ? { revalidate: 0 } : { revalidate: 30 },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
      },
      body: JSON.stringify({
        query,
        variables: {
          access_key: process.env.MEDIASTACK_API_KEY,
          category,
          keywords,
        },
      }),
    }
  );
  console.log(' keywords---->', keywords, category);
  const newsResponse = await res.json();

  //sort function by images vs not image
  const news = sortNewsByImage(newsResponse.data.myQuery);
  return { ...news, ...newsResponse.data.myQuery.pagination };
};
export default fetchNews;

//http://api.mediastack.com/v1/news?access_key=08fcdb813a546f761028b0860b47a830&sources=cnn,bbc&categories=business,entertainment,health,science,sports,technology&countries=us,gb,se,it&limit=100&offset=0&sort=published_desc&keywords=
