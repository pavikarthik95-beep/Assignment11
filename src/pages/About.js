import { Link } from "react-router-dom";
import "./pages.css";

export default function About() {
  return (
    <div className="container">
      <h1>About This Application</h1>
      <p>
        This React app is a multi-page routing project. It is created to
        understand how page navigation works using React Router.
      </p>

      <Link to="/" className="btn">Go Back Home</Link>
    </div>
  );
}
