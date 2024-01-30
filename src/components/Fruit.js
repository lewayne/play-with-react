import React from 'react'

export default function Fruit({ fruit, actionClick }) {
  //replace onFruitDelete by actionClick
  //relace () => actionClick(fruit.id) by 
  return (
    <li>
      {" "}
      {fruit.name}  <button onClick={actionClick}>x</button>
    </li>
  );
}
