import React from 'react'

export const Button = ({ name, action }) => {
  return (
    <button className='filter-btn' onClick={() => action()}>
      {name}
    </button>
  )
}

const Categories = ({ setCategory, categories }) => {
  const filterCategory = (category) => {
    setCategory(category)
  }

  return (
    <div className='btn-container'>
      {categories.map((category,index) => (
        <Button key={index} name={category} action={() => filterCategory(category)} />
      ))}
    </div>
  )
}

export default Categories
