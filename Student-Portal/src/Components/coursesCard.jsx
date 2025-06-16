import { useNavigate } from "react-router-dom";

const CourseCard = ({ course }) => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate(`/courses/${course.code}`);
  };

  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{course.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{course.code}</h6>
        <p className="card-text">{course.description}</p>
        <ul className="list-group list-group-flush mb-3">
          <li className="list-group-item">
            <strong>Credit:</strong> {course.credit}
          </li>
          <li className="list-group-item">
            <strong>Level:</strong> {course.level}
          </li>
        </ul>
        <div className="d-grid">
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleLearnMore}>
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
