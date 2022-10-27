import React from "react";
import { Link } from "react-router-dom";

const CoursePages = ({ course }) => {
  const { id, name, duration, fee, image, category } = course;
  return (
    <div>
      <div>
        <div className="card w-72 bg-base-100 shadow-xl">
          <figure className="h-ful ">
            <img src={image} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Course: {name}</h2>
            <div className="text-start">
              <p className="text text-xl">{category}</p>
              <p>Duration: {duration}</p>
              <p>Course fee: {fee}</p>
            </div>
            <div className="card-actions justify-end">
              <Link to={`/courses/${id}`}>
                <button className="btn btn-primary">Details</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePages;
