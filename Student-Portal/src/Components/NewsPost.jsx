const NewsCard = ({ news }) => (
  <div className="card mb-4 shadow-sm">
    <div className="card-body">
      <h5 className="card-title">{news.title}</h5>
      <h6 className="card-subtitle mb-2 text-muted">
        {news.date} • {news.author}
      </h6>
      <p className="card-text">{news.content}</p>
    </div>
  </div>
);

export default NewsCard;
