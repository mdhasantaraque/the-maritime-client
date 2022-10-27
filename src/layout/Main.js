import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../Footer/Footer";

export const loadCourses = createContext([]);

const Main = () => {
  const allCourses = useLoaderData();

  return (
    <>
      <loadCourses.Provider value={allCourses}>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </loadCourses.Provider>
    </>
  );
};

export default Main;
