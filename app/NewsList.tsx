import React from 'react';
import { NewsResponse } from '../typings';
import Article from './Article';

type Props = {
  news: NewsResponse;
};

const NewsList = ({ news }: Props) => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {news.data.map((article) => (
        <Article article={article} key={article.title} />
      ))}
    </main>
  );
};

export default NewsList;
