import { Link } from "react-router-dom";
import "./pages.css";

const users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Sara Smith", email: "sara@example.com" },
  { id: 3, name: "David Lee", email: "david@example.com" }
];

export default function Users() {
  return (
    <div className="container">
      <h1>User List</h1>

      <div className="user-list">
        {users.map((user) => (
          <Link key={user.id} to={`/users/${user.id}`} className="user-card">
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </Link>
        ))}
      </div>

      <Link to="/" className="btn">Go Back Home</Link>
    </div>
  );
}
