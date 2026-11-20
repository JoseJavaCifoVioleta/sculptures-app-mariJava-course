// src/pages/Layout.jsx — top navigation bar
import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <nav className="topbar">
        <h1> Sculptures Site </h1>
        <ul style={{ listStyleType: "none", display: "flex", gap: "15px", justifyContent: "center", padding: 0 }}>
          <li>
            <NavLink to="/">Home</NavLink>
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
          <li>
            <NavLink to="/team" style={{ color: "#d81b60", fontWeight: "bold" }}>🚣‍♂️ Team</NavLink>
          </li>
        </ul>
      </nav>
      <main>
        <hr /> 
        <Outlet />
      </main>
    </>
  );
}
