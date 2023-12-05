import React from 'react'
export default function child({name}){
    return (
      <div>
      <h2>This is child component</h2>
      <h3>Hi {name}</h3>
      <h3>{name}</h3>
      </div>
    )
    
}
