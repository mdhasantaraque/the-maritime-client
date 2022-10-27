import React, { useContext } from "react";
import { loadCourses } from "../layout/Main";
import Category from "./Category";
import CoursePages from "./CoursePages";
import "./Courses.css";

const Courses = ({ course }) => {
  const allCourses = useContext(loadCourses);
  return (
    <div className="course-container">
      <div className="bg-base-200 py-8">
        <Category></Category>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 items-center justify-items-center py-6 bg-base-200">
        {allCourses.map((course) => (
          <CoursePages key={course.id} course={course}></CoursePages>
        ))}
      </div>
    </div>
  );
};

export default Courses;
