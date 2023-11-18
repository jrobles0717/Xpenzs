import { NavLink } from "react-router-dom";

function MainNavigation() {
  return (
    <header className="nav-header">
      <nav>
        <ul className="nav-list">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : undefined)}
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/howitworks"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              How It Works
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/expenses"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Expenses
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/stadistics"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Stadistics
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/settings"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
