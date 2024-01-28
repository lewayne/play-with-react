import React, { useState } from "react";  
import "./App.css" 
import Form from "./components/Form";
import Fruit from "./components/Fruit";
 
function App()  {
  const [fruits, setFruits] = useState([
    { id: 1, name: "lewayne" },
    { id: 2, name: "merlin" },
    { id: 3, name: "Henri" }
    
  ]);
 
    const [nouveauFruit, setNouveauFruit] = useState("")

   const handleDelete = (id) => {
     setFruits(fruits.filter((f) => f.id !== id));
   };

    const handleSubmit = (e) => {
      e.preventDefault();
      e.stopPropagation()
      const id = new Date().getTime()
      //const fruitsCopy = fruits.slice() // [...fruits]
      //fruitsCopy.push({id: 5, name: nouveauFruit});
      //setFruits(fruitsCopy)

      const fruitsNew = [...fruits, ...[{id: id, name: nouveauFruit}]] 

      setFruits(fruitsNew)
      setNouveauFruit('')
    };

    const handleChange = (e)=> {
      setNouveauFruit(e.target.value)
    }
    return (
      <div>
        <h1> Liste des fruits </h1>
        <ul>
          {fruits.map((f) => (
            <Fruit  key={f.id} fruit={f}  onFruitDelete={handleDelete} />
          ))}
        </ul>

        <Form handleSubmit ={handleSubmit} nouveauFruit={nouveauFruit} handleChange = {handleChange}/>
      </div>
    ); 
}

export default App;
