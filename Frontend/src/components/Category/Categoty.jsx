import React, { useState, useEffect } from "react";
import MainCategory from "./MainCategory";
import SubCategories from "./SubCategories";
import { FaMale, FaFemale, FaBabyCarriage, FaRegHandshake, FaBook, FaCouch, FaMobileAlt, FaDumbbell, FaPerfume } from 'react-icons/fa';

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
        className="w-[25%] h-full "
      >
        <MainCategory
          categories={categories}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
        />
      </div>

      {/* Subcategories List */}
      <div className="w-[75%] ">
        {hoveredCategory && (
          <SubCategories subcategories={hoveredCategory.subcategories} hoveredCategory={hoveredCategory} />
        )}
      </div>
    </div>
  );
};

export default Category;