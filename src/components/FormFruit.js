import React, { useState } from "react";

export default function FormFruit({ handleAdd }) {
  const [nouveauFruit, setNouveauFruit] = useState("");

  const handleChange = (e) => {
    setNouveauFruit(e.target.value);
  };

  const handleSubmit = (e) => { 
    e.preventDefault();
    e.stopPropagation()
    const id = new Date().getTime();
    const newFruit = { id: id, name: nouveauFruit };

    handleAdd(newFruit)
    setNouveauFruit("");
  };

  return (
    <form action="submit" onSubmit={handleSubmit}>
      <label>Nom : </label>
      <input
        type="text"
        value={nouveauFruit}
        onChange={handleChange}
        placeholder="Ajouter un fruit"
      />
      <button>AJouter + </button>
    </form>
  );
}

// data child component to parent compoenent
// le composant Enfant transmet la data au composant parent en passant la data à travers ces paramètres
// cela peut se faire dans le render ou dans un comportement comme c'est le cas
