import React from "react";
import { useParams, Link } from "react-router-dom";
import { courses } from "../Data/courses";

const CourseDetails = () => {
  const { code } = useParams();
  const course = courses.find(c => c.code === code);

  if (!course) {
    return (
      <div className="container mt-5">
        <h2 className="text-danger">Course not found</h2>
        <Link to="/courses" className="btn btn-primary mt-3">
          Back to Courses
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="card shadow-sm">
        <div className="card-body">
          <h2 className="card-title">{course.name}</h2>
          <h5 className="card-subtitle mb-3 text-muted">{course.code}</h5>
          <ul className="list-group list-group-flush mb-3">
            <li className="list-group-item">
              <strong>Level:</strong> {course.level}
            </li>
            <li className="list-group-item">
              <strong>Credits:</strong> {course.credits}
            </li>
          </ul>
          <h5>Description</h5>
          <p className="card-text">{course.description}</p>
          <Link to="/courses" className="btn btn-primary">
            Back to Courses
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
