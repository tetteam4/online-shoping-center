import React from 'react'

const SubCategories = ({hoveredCategory , subcategories}) => {
  return (
    
       <div>
            <h4 className="text-lg font-semibold pt-3">
              {hoveredCategory.name}
            </h4>
            <ul className="text-sm text-gray-600">
              {hoveredCategory.subcategories.map((sub, index) => (
                <li key={index} className="hover:bg-gray-500 py-2 px-2 rounded-md cursor-pointer">
                  {sub}
                </li>
              ))}
            </ul>
          </div>
    
  )
}

export default SubCategories