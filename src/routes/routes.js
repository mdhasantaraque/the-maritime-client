import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AllError from "../components/AllError";
import Blog from "../components/Blog";
import Courses from "../components/Courses";
import Login from "../components/Login";
import Register from "../components/Register";
import CourseDetails from "../components/CourseDetails";
import CoursePremium from "../components/CoursePremium";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    loader: async () => {
      return fetch("https://the-maritime-server.vercel.app/courses");
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
        path: "/courses",
        element: <Courses></Courses>,
      },
      {
        path: "/courses/:id",
        loader: async ({ params }) => {
          return fetch(
            `https://the-maritime-server.vercel.app/courses/${params.id}`
          );
        },
        element: <CourseDetails></CourseDetails>,
      },
      {
        path: "/premium/:id",
        loader: async ({ params }) => {
          return fetch(
            `https://the-maritime-server.vercel.app/courses/${params.id}`
          );
        },
        element: (
          <PrivateRoute>
            <CoursePremium></CoursePremium>
          </PrivateRoute>
        ),
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
