import { NavLink, Outlet } from "react-router-dom";

export const App = () => {
  return (
    <div>
      <NavLink to={'/login'}>Login</NavLink>
      <Outlet />
    </div>
  );
};
