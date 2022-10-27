import React, { useContext } from "react";
import { loadCourses } from "../layout/Main";
import CoursePages from "./CoursePages";

const Courses = ({ course }) => {
  const allCourses = useContext(loadCourses);
  return (
    <div>
      <div></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-items-center py-auto p-4 bg-base-200">
        {allCourses.map((course) => (
          <CoursePages key={course.id} course={course}></CoursePages>
        ))}
      </div>
    </div>
  );
};

export default Courses;
