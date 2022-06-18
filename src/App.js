import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import items from './data'

function App() {
  const [menuItems, setMenuItems] = useState(items)
  const [category, setCategory] = useState('')

  return (
    <main>
      <section className='container'>
        <div className='menu'>
          <h1 className='title'>Our Menu</h1>
          <div className='underline'></div>
        </div>
        <div className='separator'></div>
        <Categories setCategory={setCategory} />
        <div className='separator'></div>
        <Menu menuItems={menuItems} category={category} />
      </section>
    </main>
  )
}

export default App
