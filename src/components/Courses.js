import React from "react";

const Courses = ({ course }) => {
  // console.log(course);
  return (
    <div className="grid grid-cols-2 gap-4 mx-10 text-center">
      <div className="w-1/4">01</div>

      <div className="w-3/4">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
