import NewsCard from '../Components/NewsPost';
import { news } from '../Data/news';

const News = () => (
  <div className="space-y-4 p-4">
    {news.map(news => (
      <NewsCard key={news.id} news={news} />
    ))}
  </div>
);
export default News;
