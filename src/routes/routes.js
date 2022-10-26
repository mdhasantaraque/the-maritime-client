import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AllError from "../components/AllError";
import Blog from "../components/Blog";
import Courses from "../components/Courses";
import Login from "../components/Login";
import Register from "../components/Register";
import Category from "../Category/Category";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    loader: async () => {
      return fetch("http://localhost:5000/courses");
    },
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
        path: "/categories",
        element: <Category></Category>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
  {
    path: "*",
    element: <AllError></AllError>,
  },
]);
