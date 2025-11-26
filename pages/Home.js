import { Link } from "react-router-dom";
import "./pages.css";

export default function Home() {
  return (
    <div className="container">
      <h1>Welcome to React Routing App</h1>
      <p>This is a simple multi-page React application using React Router.</p>

      <div className="btn-group">
        <Link to="/about" className="btn">Go to About Page</Link>
        <Link to="/users" className="btn">View Users</Link>
      </div>
    </div>
  );
}
