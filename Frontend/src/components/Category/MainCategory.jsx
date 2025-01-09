import React from 'react'

const MainCategory = ({categories , handleMouseLeave , handleMouseEnter}) => {
  return (
    <div className='py-4'>
      <h3 className="text-lg font-semibold px-3">Fashion Categories</h3>
        <ul className="">
          {categories.map((category, index) => (
            <li
              key={index}
              className="rounded-md cursor-pointer"
              onMouseEnter={() => handleMouseEnter(category)}
              onMouseLeave={handleMouseLeave}
            >
              <h4 className="text-md font-medium px-3 py-2 hover:bg-gray-100 hover:text-red-600">
                {category.name}
              </h4>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default MainCategory