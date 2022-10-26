import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../Footer/Footer";

export const loadCourses = createContext([]);

const Main = () => {
  const allCourses = useLoaderData();

  return (
    <div>
      <loadCourses value={allCourses}>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </loadCourses>
    </div>
  );
};

export default Main;
