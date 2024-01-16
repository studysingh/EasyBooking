import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Hotel from "./pages/hotel/Hotel.jsx";
import List from "./pages/list/List.jsx";

const router = createBrowserRouter([
  {
    path: "/reservation",
    element: <App />,
    children: [
      { path: "/reservation/home", element: <Home /> },
      { path: "/reservation", element: <Home /> },
      { path: "/reservation/hotel", element: <Hotel /> },
      { path: "/reservation/list", element: <List /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider basename={"/reservation"} router={router} />
  </React.StrictMode>
);
