import React from "react";
import { useContext } from "react";
import Courses from "../components/Courses";
import { loadCourses } from "../layout/Main";

const Category = () => {
  const allCourses = useContext(loadCourses);
  console.log(allCourses);
  return (
    <div>
      {allCourses.map((course) => (
        <Courses key={course.id} course={course}></Courses>
      ))}
    </div>
  );
};

export default Category;
