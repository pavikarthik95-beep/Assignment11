import { useParams, Link } from "react-router-dom";
import "./pages.css";

const users = {
  1: { name: "John Doe", email: "john@example.com" },
  2: { name: "Sara Smith", email: "sara@example.com" },
  3: { name: "David Lee", email: "david@example.com" }
};

export default function UserDetails() {
  const { id } = useParams();
  const user = users[id];

  return (
    <div className="container">
      <h1>User Details</h1>

      <div className="detail-card">
        <h2>{user.name}</h2>
        <p><strong>Email:</strong> {user.email}</p>
      </div>

      <Link to="/users" className="btn">Go Back</Link>
    </div>
  );
}
