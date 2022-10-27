import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const course = useLoaderData();
  //   console.log(course);
  return (
    <section>
      <img
        src={course.image}
        alt=""
        className="w-full h-96 mx-auto bg-base-200"
      />
      <div className="bg-base-200">
        <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-900">
            {course.name}
          </h1>
          <p className="mt-6 mb-2 text-lg sm:mb-2 xl:max-w-3xl dark:text-gray-900">
            Diploma: {course.duration}
          </p>
          <p>{course.structure}</p>
          <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-900">
            {course.details}
          </p>
          <div className="flex flex-wrap justify-center">
            <Link to={`/premium/${course.id}`}>
              <button
                type="button"
                className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-800 dark:text-gray-50"
              >
                Get Premium
              </button>
            </Link>
            <Link to={"/courses"}>
              <button
                type="button"
                className="px-8 py-3 m-2 text-lg border rounded dark:border-gray-700 dark:text-gray-900"
              >
                Back Courses
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
