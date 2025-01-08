import React, { useState, useEffect } from "react";
import MainCategory from "./MainCategory";
import SubCategories from "./SubCategories";

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
          subcategories: [
            "T-Shirts",
            "Shorts",
            "Sneakers",
            "Hats",
            "Shirts",
            "Pants",
            "Shoes",
            "Accessories",
          ],
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
          subcategories: [
            "T-Shirts",
            "Shorts",
            "Sneakers",
            "Hats",
            "Shirts",
            "Pants",
            "Shoes",
            "Accessories",
          ],
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
    <div className="flex max-h-full gap-x-5">
      {/* Categories List */}
      <div
        style={{
          direction: "ltr",
        }}
        className="w-1/3 h-full overflow-y-scroll"
      >
        <MainCategory
          categories={categories}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
        />
      </div>

      {/* Subcategories List */}
      <div className="w-2/3 overflow-y-scroll">
        {hoveredCategory && (
          <SubCategories subcategories={hoveredCategory.subcategories} hoveredCategory={hoveredCategory} />
        )}
      </div>
    </div>
  );
};

export default Category;
