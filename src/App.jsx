import { Header } from "./components/Header/Header";
import "./index.css";

import { Outlet } from "react-router-dom";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
};
