import React from 'react'
import Item from './Itemlist.js'
const Array = () => {
    const itemArray=['Item1' ,'Item2' ,'Item3'];
  return (
    <div><h1>Item list Example</h1>
    <Item items={itemArray}/>
    </div>
  )
}

export default Array