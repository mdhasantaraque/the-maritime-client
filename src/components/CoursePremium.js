import React from "react";
import { useLoaderData } from "react-router-dom";

const CoursePremium = () => {
  const course = useLoaderData();
  console.log(course);
  return (
    <section className="p-6 dark:bg-gray-800 dark:text-gray-100">
      <div className="container grid gap-6 mx-auto lg:grid-cols-2 xl:grid-cols-5">
        <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-900">
          <span className="block mb-2 dark:text-violet-400"></span>
          <h1 className="text-5xl font-extrabold dark:text-gray-50">
            {course.name}
          </h1>
          <p className="my-8">
            <span className="font-medium dark:text-gray-50">
              {course.structure}
            </span>
            {course.details}
          </p>
          <p>Course Fee: {course.fee}</p>
          <p>Duration: {course.duration}</p>

          <button
            type="button"
            className="w-full py-2 font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
          >
            Premium Join
          </button>
        </div>

        <img
          src={course.image}
          alt=""
          className="object-cover w-full rounded-md xl:col-span-3 dark:bg-gray-500"
        />
      </div>
    </section>
  );
};

export default CoursePremium;
