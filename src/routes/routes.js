import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AllError from "../components/AllError";
import Blog from "../components/Blog";
import Courses from "../components/Courses";
import Login from "../components/Login";
import Register from "../components/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Register></Register>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
      },
    ],
  },
  {
    path: "*",
    element: <AllError></AllError>,
  },
]);
