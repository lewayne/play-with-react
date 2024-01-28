import React, { useState } from "react";  
import "./App.css"  
import FormFruit from "./components/FormFruit";
import Fruit from "./components/Fruit";
 
function App()  {
  const [fruits, setFruits] = useState([
    { id: 1, name: "lewayne" },
    { id: 2, name: "merlin" },
    { id: 3, name: "Henri" }
    
  ]);
 

   const handleDelete = (id) => {
     setFruits(fruits.filter((f) => f.id !== id));
   }

    const afficherFruit = (fruit) => {
      alert("J'aime ce fruit " + fruit);
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
              actionClick={() => afficherFruit(f.id)}
            />
          ))}
        </ul>

        <FormFruit handleAdd={handleAdd} />
      </div>
    ); 
}

export default App;
