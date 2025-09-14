import { Link, Outlet } from "react-router-dom";

export default function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Lab 2 – React SPA</h1>
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/" style={{ marginRight: "15px" }}>Home</Link>
        <Link to="/users">Users</Link>
      </nav>
      <Outlet />
    </div>
  );
}
