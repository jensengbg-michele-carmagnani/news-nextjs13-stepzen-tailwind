import { notFound } from 'next/navigation';
import { Article } from '../../typings';
import LiveTimeStamp from '../LiveTimeStamp';

type Props = {
  searchParams?: Article;
};

const page = ({ searchParams }: Props) => {
  if (
    (searchParams && Object.entries(searchParams).length === 0) ||
    !searchParams
  ) {
    notFound();
  }
  const article: Article = searchParams;
  return (
    <article className="">
      <section className="flex flex-col  lg:flex-row pb-24 px-0 lg:px-10">
        {article.image && (
          <img
            src={article.image}
            alt={article.title}
            className="h-50 max-w-sm mx-auto md:max-w-lg lg:max-w-xl object-fit rounded-lg shadow-md"
          />
        )}
        <div className="px-10">
          <h1 className="headerTitle px-1 no-underline pb-2">
            {article.title}
          </h1>
          <div className="flex divide-x-2 space-x-4">
            <h2 className="font-bold">{article.author}</h2>
            <h2 className="font-bold pl-4">{article.source}</h2>
            <p className="font-bold pl-4">
              <LiveTimeStamp time={article.published_at} />
            </p>
          </div>
          <p className="pt-4">{article.description}</p>
        </div>
      </section>
    </article>
  );
};

export default page;
