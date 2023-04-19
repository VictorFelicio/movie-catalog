import "./index.css";

import { Outlet } from "react-router-dom";

export const App = () => {
  return (
    <div className="App">
      <h2>Ola Mundo</h2>
      <Outlet />
    </div>
  );
};
