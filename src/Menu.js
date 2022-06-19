import React from 'react'

const Menu = ({ menuItems, category }) => {

  return (
    <article className='container food-section'>
      {menuItems
        .filter(item => {
          if (category === 'all') {
            return true
          }

          return item.category === category
        })
        .map(({ id, title, price, img, rating, status, desc }) => {
          return (
            <div key={id} className='menu-item'>
              <div className='img-container'>
                <img className='img' src={img} alt='title' />
              </div>
              <div className='info'>
                <div className='header'>
                  <p className='title'>{title}</p>
                </div>
                <div className='text'>
                  <p className='desc'>{desc}</p>
                </div>
                <div className='footer'>
                  <p className='price'>${price}</p>
                  <p className='status'>available</p>
                </div>
              </div>
            </div>
          )
        })}
    </article>
  )
}

export default Menu
