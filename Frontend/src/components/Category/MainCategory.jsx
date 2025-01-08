import React from 'react'

const MainCategory = ({categories , handleMouseLeave , handleMouseEnter}) => {
  return (
    <div className=''>
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
  )
}

export default MainCategory