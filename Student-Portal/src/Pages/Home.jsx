import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="bg-white p-5 rounded shadow text-center" style={{ maxWidth: '500px', width: '100%' }}>
        <h1 className="mb-4">Welcome</h1>
        <p className="text-muted mb-4">
          We're glad to have you here. Choose where you'd like to go:
        </p>
        <div className="d-grid gap-2">
          <Link to="/Courses" className="btn btn-primary">
            Explore Courses
          </Link>
          <Link to="/News" className="btn btn-outline-secondary">
            Read News
          </Link>
          <Link to="/Register" className="btn btn-success">
            Register Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
