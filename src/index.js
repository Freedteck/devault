import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root/Root";
import Home from "./routes/home/Home";
import Discussions from "./routes/discussions/Discussions";
import AskAndBuild from "./routes/askAndBuild/AskAndBuild";
import Updates from "./routes/updates/Updates";

const router = createBrowserRouter([
  {
    path: "",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "discussions",
        element: <Discussions />,
        children: [
          {
            index: true,
            element: <AskAndBuild />,
          },
          {
            path: "updates",
            element: <Updates />,
          },
        ],
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
