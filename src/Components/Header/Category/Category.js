import React, { useState } from "react";

const Category = ({ items, filterItems }) => {
  const allCategories = ["all", ...new Set(items.map((item) => item.category))];
  const [categories, setCategories] = useState(allCategories);
  console.log(categories);

  return (
    <div>
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            key={index}
            onClick={() => filterItems(category)}
            className="dropdown-item"
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Category;
