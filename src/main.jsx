import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Hotel from "./pages/hotel/Hotel.jsx";
import List from "./pages/list/List.jsx";

const router = createBrowserRouter([
  {
    path: "/EasyBooking",
    element: <App />,
    children: [
      { path: "/EasyBooking/home", element: <Home /> },
      { path: "/EasyBooking", element: <Home /> },
      { path: "/EasyBooking/hotel", element: <Hotel /> },
      { path: "/EasyBooking/list", element: <List /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider basename={"/EasyBooking"} router={router} />
  </React.StrictMode>
);
