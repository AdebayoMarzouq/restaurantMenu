import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import items from './data'

const allCategories = ['all', ...new Set(items.map(item => item.category))]
console.log(allCategories)

function App() {
  const [menuItems, setMenuItems] = useState(items)
  const [category, setCategory] = useState('all')
  const [allCat, setAllCat] = useState(allCategories)

  return (
    <main>
      <section className='container'>
        <div className='menu'>
          <h1 className='title'>Our Menu</h1>
          <div className='underline'></div>
        </div>
        <div className='separator'></div>
        <Categories setCategory={setCategory} categories={allCat} />
        <div className='separator'></div>
        <Menu menuItems={menuItems} category={category} />
      </section>
    </main>
  )
}

export default App
