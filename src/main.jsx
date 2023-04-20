import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { App } from "./App";
import { Home } from "./routes/pages/Home/Home";
import { Movie } from "./routes/pages/Movie/Movie";
import { Error } from "./routes/pages/Error/Error";
import { Favorites } from "./routes/pages/Favorites/Favorites";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/movie/:id",
        element: <Movie />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
    ],
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
