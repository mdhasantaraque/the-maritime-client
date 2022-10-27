import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/courses_categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      {categories.map((category) => (
        <p key={category.id} className="mx-8 my-4">
          <Link to={`/courses/${category.id}`}>
            <button className="btn btn-primary w-52">{category.name}</button>
          </Link>
        </p>
      ))}
    </div>
  );
};

export default Category;
