import React from 'react';
import { CATEGORIES } from '../constants';
import fetchNews from '../lib/fetchNews';
import { NewsResponse } from '../typings';
import NewsList from './NewsList';
import news from '../newsMock.json';

type Props = {
  news: NewsResponse;
};

const HomePage = async ({}: Props) => {
  // const news: NewsResponse =
  //   response || (await fetchNews(CATEGORIES.join(',')));
  console.log(news);

  return (
    <div>
      <NewsList news={news} />
    </div>
  );
};

export default HomePage;
