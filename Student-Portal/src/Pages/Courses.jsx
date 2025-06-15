import CourseCard from '../Components/coursesCard';
import { courses } from '../Data/courses';

const Courses = () => (
  <div className="container">
    {courses.map(course => (
      <CourseCard key={course.code} course={course} />
    ))}
  </div>
);
export default Courses;
