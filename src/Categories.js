import React from 'react';

export const Button = ({name, action}) => {
  return <button className="filter-btn" onClick={() => action()}>{name}</button>
}

const Categories = ({ setCategory }) => {
  const action = (category) => {
    setCategory(category)
  }

  return <div className='btn-container'>
    <Button name='all' action={() => action('')}/>
    <Button name='breakfast' action={() => action('breakfast')}/>
    <Button name='lunch' action={() => action('lunch')}/>
    <Button name='shakes' action={() => action('shakes')}/>
  </div>;
};

export default Categories;
