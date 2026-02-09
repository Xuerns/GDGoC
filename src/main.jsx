import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import ListContainer from "./page/listContainer.jsx";
import Profile from "./page/Profile.jsx";
import Sections from "./page/Sections.jsx";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/section",
    element: <Sections />,
    children: [
      {
        index: true,
        element: <Navigate to="todo" replace />,
      },
      { path: "todo", element: <ListContainer /> },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
