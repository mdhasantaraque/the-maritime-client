import React from "react";

const CoursePages = ({ course }) => {
  const { id, name, duration, fee, image, category } = course;
  return (
    <div>
      <div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DLg3T3oQh1y0&psig=AOvVaw09pTUHXcxG_DKZdOwLQMxS&ust=1666886920470000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCMCVhNOk_voCFQAAAAAdAAAAABAR"
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Course: {name}</h2>
            <div className="text-start">
              <p className="text text-xl">{category}</p>
              <p>Duration: {duration}</p>
              <p>Course fee: {fee}</p>
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePages;
