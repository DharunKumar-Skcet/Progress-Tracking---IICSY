import React from 'react'
import PropType from 'prop-types';
const Itemlist = ({items}) => {
  return (
    <ul>
    {items.map((items,index)=>(
    <li key={index}>{items}</li>
  ))}
    </ul>
  )
};

Itemlist.propType={
    items:PropType.arrayOf(PropType.string).isRequired,
};

export default Itemlist;

