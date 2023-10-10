import React from "react";
import ReactDOM from "react-dom/client";
import "tailwindcss/tailwind.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root, RootDefault, basicHooksRoutes } from "./routes";
import { ErrorPage } from "./ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <RootDefault />,
      },
      ...basicHooksRoutes,
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
