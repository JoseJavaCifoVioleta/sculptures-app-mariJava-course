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
            <NavLink to="/">Home</NavLink >
          </li>
          <li>
            <NavLink to="/sculptures/0">Detail</NavLink>
          </li>
          <li>
            <NavLink to="/sculptures/new">New</NavLink>
          </li>
          <li>
            <NavLink to="/sculptures/filter">Filter</NavLink>
          </li>
          <li>
            <NavLink to="/sculptures/remove">Remove</NavLink>
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