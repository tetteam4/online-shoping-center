import React from 'react'

const SubCategories = ({hoveredCategory , subcategories}) => {
  return (
    <div>
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
    </div>
  )
}

export default SubCategories
