import React from 'react';
import { CATEGORIES } from '../constants';
import fetchNews from '../lib/fetchNews';
import { NewsResponse } from '../typings';
import NewsList from './NewsList';

type Props = {};

const HomePage = async ({}: Props) => {
  const news: NewsResponse = await fetchNews(CATEGORIES.join(','));

  return (
    <div className="mt-5">
      <NewsList news={news} />
    </div>
  );
};

export default HomePage;
