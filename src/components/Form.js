import React from 'react' 

export default function Form({ handleSubmit, nouveauFruit, handleChange }) {
 
  return (
    <form onSubmit={handleSubmit}>
      <label>Nom : </label>
      <input
        type="text"
        value={nouveauFruit}
        onChange={ handleChange }
        placeholder="Ajouter un fruit"
      />
      <button>AJouter + </button>
    </form>
  );
}