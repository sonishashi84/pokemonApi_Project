import React from 'react';

function PokemonOne({ name, image }) {
  return (
    <>
      <div className="pokemon-single">
        <div>{name}</div>
        <div>
          <img src={image} />
        </div>
      </div>
    </>
  );
}
export default PokemonOne;
