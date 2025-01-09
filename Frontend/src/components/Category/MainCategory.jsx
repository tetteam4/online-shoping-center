import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
const MainCategory = ({categories , handleMouseLeave , handleMouseEnter}) => {
  return (
    <div className=''>
     
        <ul className="">
          {categories.map((category, index) => (
            <li
              key={index}
              className=" flex justify-between hover:bg-gray-100 items-center cursor-pointer"
              onMouseEnter={() => handleMouseEnter(category)}
              onMouseLeave={handleMouseLeave}
            >
              <h4 className="text-md font-medium px-3 pl-3 py-2  hover:text-red-600">
                {category.name}
              </h4>
              <span><IoIosArrowBack /></span>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default MainCategory