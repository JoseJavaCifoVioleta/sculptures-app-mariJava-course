// src/pages/Layout.jsx — top navigation bar
import { NavLink, Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <nav className="topbar">
        <h1> Sculptures Site </h1>
        {/* TODO: NavLink to "/" (List) and "/sculptures/new" (Add) */}
        {/* Hint: NavLink adds an "active" class — style it */}
        <ul style={{listStyleType: 'none'}}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sculptures/0">Detail</Link>
          </li>
          <li>
            <Link to="/sculptures/new">New</Link>
          </li>
          <li>
            <Link to="/sculptures/filter">Filter</Link>
          </li>
          <li>
            <Link to="/sculptures/remove">Remove</Link>
          </li>
        </ul>

      </nav>
      <main>
        <hr /> 
        {/* TODO: render nested routes + pass shared state via context */}
        <Outlet />
      </main>
    </>
  );
}