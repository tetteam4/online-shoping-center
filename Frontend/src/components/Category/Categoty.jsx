import React, { useState } from "react";

const Category = () => {
  const categories = [
    {
      name: "Men's Fashion",
      subcategories: ["Shirts", "Pants", "Shoes", "Accessories"],
    },
    {
      name: "Women's Fashion",
      subcategories: ["Dresses", "Tops", "Skirts", "Handbags"],
    },
    {
      name: "Kids' Fashion",
      subcategories: ["T-Shirts", "Shorts", "Sneakers", "Hats","Shirts", "Pants", "Shoes", "Accessories","Shirts", "Pants", "Shoes", "Accessories","Shirts", "Pants", "Shoes", "Accessories","Shirts", "Pants", "Shoes", "Accessories","Shirts", "Pants", "Shoes", "Accessories"],
    },
    {
      name: "Accessories",
      subcategories: ["Watches", "Jewelry", "Belts", "Sunglasses"],
    },
    {
      name: "Men's Fashion",
      subcategories: ["Shirts", "Pants", "Shoes", "Accessories"],
    },
    {
      name: "Women's Fashion",
      subcategories: ["Dresses", "Tops", "Skirts", "Handbags"],
    },
    {
      name: "Kids' Fashion",
      subcategories: ["T-Shirts", "Shorts", "Sneakers", "Hats"],
    },
    {
      name: "Accessories",
      subcategories: ["Watches", "Jewelry", "Belts", "Sunglasses"],
    },
    {
      name: "Men's Fashion",
      subcategories: ["Shirts", "Pants", "Shoes", "Accessories"],
    },
    {
      name: "Women's Fashion",
      subcategories: ["Dresses", "Tops", "Skirts", "Handbags"],
    },
    {
      name: "Kids' Fashion",
      subcategories: ["T-Shirts", "Shorts", "Sneakers", "Hats"],
    },
    {
      name: "Accessories",
      subcategories: ["Watches", "Jewelry", "Belts", "Sunglasses"],
    },
  ];

  const [hoveredCategory, setHoveredCategory] = useState(null);

  const handleMouseEnter = (category) => {
    setHoveredCategory(category);
  };

  const handleMouseLeave = () => {
    setHoveredCategory(null);
  };

  return (
    <div className="flex bg-white  w-full">
      {/* Categories List */}
      <div className="w-1/3">
        <h3 className="text-lg font-semibold mb-4">Fashion Categories</h3>
        <ul className="space-y-4">
          {categories.map((category, index) => (
            <li
              key={index}
              className="border-b pb-2 cursor-pointer"
              onMouseEnter={() => handleMouseEnter(category)}
              onMouseLeave={handleMouseLeave}
            >
              <h4 className="text-md font-medium hover:text-blue-600">
                {category.name}
              </h4>
            </li>
          ))}
        </ul>
      </div>

      {/* Subcategories List */}
      <div className="w-2/3 onverflow-y-scroll">
        {hoveredCategory && (
          <div>
            <h4 className="text-lg font-semibold mb-2">
              {hoveredCategory.name}
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              {hoveredCategory.subcategories.map((sub, index) => (
                <li key={index} className="hover:text-blue-600 cursor-pointer">
                  {sub}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;
