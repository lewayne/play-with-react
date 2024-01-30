import React, { useState } from "react";  
import "./App.css"  
import FormFruit from "./components/FormFruit";
import Fruit from "./components/Fruit";
 
function App()  {
  const [fruits, setFruits] = useState([
    { id: 1, name: "Tomato" },
    { id: 2, name: "Mangoe" },
    { id: 3, name: "Citron" },
    { id: 4, name: "Pineapple" }
  ]);
 

   const handleDelete = (id) => {
     setFruits(fruits.filter((f) => f.id !== id));
   }

    const displayFruit = (fruit) => {
      alert("I like this fruit " + fruit);
    };

    const handleAdd = (data) => {
       const fruitsCopy = fruits.slice(); // [...fruits]
       fruitsCopy.push(data);
       setFruits(fruitsCopy);
    };

    // <Fruit key={f.id} fruit={f} onFruitDelete={handleDelete} /> 
    return (
      <div>
        <h1> Liste des fruits </h1>
        <ul>
          {fruits.map((f) => (
            <Fruit
              key={f.id}
              fruit={f}
              actionClick={() => handleDelete(f.id)}
            />
          ))}
        </ul>

        <FormFruit handleAdd={handleAdd} />
      </div>
    ); 
}

export default App;
