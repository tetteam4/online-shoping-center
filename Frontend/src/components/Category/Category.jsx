

import React, { useState, useEffect } from "react";
import MainCategory from "./MainCategory";
import SubCategories from "./SubCategories";

const Category = () => {
  const categories = [
    {
      name: "مد و پوشاک مردانه",
      subcategories: ["پیراهن", "شلوار", "کفش", "لوازم جانبی"],
    },
    {
      name: "مد و پوشاک زنانه",
      subcategories: ["لباس", "تاپ", "دامن", "کیف دستی"],
    },
    {
      name: "مد و پوشاک بچگانه",
      subcategories: [
        "تی‌شرت",
        "شلوارک",
        "کفش ورزشی",
        "کلاه",
        "پیراهن",
        "شلوار",
        "کفش",
        "لوازم جانبی",
      ],
    },
    {
      name: "لوازم جانبی",
      subcategories: ["ساعت", "جواهرات", "کمربند", "عینک آفتابی"],
    },
    {
      name: "کتاب و لوازم تحریر",
      subcategories: ["کتاب‌های آموزشی", "دفتر", "مداد", "پاک‌کن"],
    },
    {
      name: "لوازم خانه",
      subcategories: ["مبلمان", "چراغ", "دکوراسیون", "فرش"],
    },
    {
      name: "الکترونیک و فناوری",
      subcategories: ["گوشی موبایل", "لپ‌تاپ", "دوربین", "هدست"],
    },
    {
      name: "ورزش و تناسب اندام",
      subcategories: ["لباس ورزشی", "کفش ورزشی", "دستگاه‌های ورزشی", "دستکش ورزشی"],
    },
    {
      name: "عطر و لوازم آرایشی",
      subcategories: ["عطر", "کرم صورت", "لوازم آرایش", "شامپو"],
    },
    {
      name: "مد و پوشاک مردانه",
      subcategories: ["پیراهن", "شلوار", "کفش", "لوازم جانبی"],
    },
    {
      name: "مد و پوشاک زنانه",
      subcategories: ["لباس", "تاپ", "دامن", "کیف دستی"],
    },
    {
      name: "مد و پوشاک بچگانه",
      subcategories: [
        "تی‌شرت",
        "شلوارک",
        "کفش ورزشی",
        "کلاه",
        "پیراهن",
        "شلوار",
        "کفش",
        "لوازم جانبی",
      ],
    },
    {
      name: "لوازم جانبی",
      subcategories: ["ساعت", "جواهرات", "کمربند", "عینک آفتابی"],
    },
    {
      name: "کتاب و لوازم تحریر",
      subcategories: ["کتاب‌های آموزشی", "دفتر", "مداد", "پاک‌کن"],
    },
    {
      name: "لوازم خانه",
      subcategories: ["مبلمان", "چراغ", "دکوراسیون", "فرش"],
    },
    {
      name: "الکترونیک و فناوری",
      subcategories: ["گوشی موبایل", "لپ‌تاپ", "دوربین", "هدست"],
    },
    {
      name: "ورزش و تناسب اندام",
      subcategories: ["لباس ورزشی", "کفش ورزشی", "دستگاه‌های ورزشی", "دستکش ورزشی"],
    },
  ];

  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [isHovered, setIsHovered] = useState(false); // Track if either section is hovered
  let hoverTimeout;

  const handleMouseEnter = (category) => {
    clearTimeout(hoverTimeout); // Cancel any pending timeout
    setHoveredCategory(category);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    hoverTimeout = setTimeout(() => {
      setHoveredCategory(null);
      setIsHovered(false);
    }, 300); // Delay closing for 300ms
  };

  useEffect(() => {
    return () => clearTimeout(hoverTimeout); // Cleanup timeout on unmount
  }, []);

  return (
    <div
      className="flex max-h-full gap-x-5"
      onMouseEnter={() => clearTimeout(hoverTimeout)} // Prevent early closing
      onMouseLeave={handleMouseLeave} // Trigger delayed close
    >
      {/* Categories List */}
      <div className="w-[25%] h-full bg-white">
        <MainCategory
          categories={categories}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
        />
      </div>

      {/* Subcategories List */}
      <div className="w-[75%]">
        {isHovered && hoveredCategory && (
          <SubCategories
            subcategories={hoveredCategory.subcategories}
            hoveredCategory={hoveredCategory}
          />
        )}
      </div>
    </div>
  );
};

export default Category;
