import React from 'react';
import { Article } from '../typings';
import LiveTimeStamp from './LiveTimeStamp';
import ReadMoreButton from './ReadMoreButton';

type Props = {
  article: Article;
};

const Article = ({ article }: Props) => {
  return (
    <article className="bg-slate-100 dark:bg-slate-800 flex flex-col rounded-lg  hover:scale-105 shadow-lg hover:shadow-xl hover:bg-slate-200 transition -all duration-200 ease-out">
      {article.image && (
        <img
          src={article.image}
          alt={article.title}
          className="h-56 w-full object-cover rounded-t-lg shadow-md"
        />
      )}
      <div className="flex flex-col flex-1">
        <div className="flex flex-col flex-1 p-5">
          <h2 className="font-bold font-serif">{article.title}</h2>
          <section className="mt-2 flex-1 line-clamp-6 text-xs">
            {article.description}
          </section>
          <footer>
            <p>{article.source}</p>
            <p>
              <LiveTimeStamp time={article.published_at} />
            </p>
          </footer>
        </div>
        {/*readMore button */}
        <ReadMoreButton article={article} />
      </div>
    </article>
  );
};

export default Article;
