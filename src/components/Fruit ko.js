import React from 'react'

export default function Fruit({fruit, onFruitDelete}){
 
    return ( 
        <li>
          {" "}
          {fruit.name} <button onClick={() => onFruitDelete(fruit.id)}>x</button>
        </li> 
    );  
    
}
