import React, { useEffect, useState } from 'react';

import PokemonOne from '../pokemon/Pokemon'
import axios from 'axios';
function PokemonList() {
    const [apiData, setapiData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    async function callPokemonApi(){
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
        const result = await response.data.results;
        const mapPokemon = result.map((pokemon) => axios.get(pokemon.url));
        const pokemonData = await axios.all(mapPokemon);
       const res = pokemonData.map((pokedata) => {
            const pokemon = pokedata.data;
            return {
                id: pokemon.id,
                name: pokemon.name,
                image: (pokemon.sprites.other) ? pokemon.sprites.other.dream_world.front_default : pokemon.sprites.front_shiny,
                types: pokemon.types
             }
        })

        setLoading(false);
        console.log(res);
        setapiData(res);
    }
  useEffect(() => {
    callPokemonApi()
  }, []);
  return (
    <>
<div className='pokemon-wrapper'>
{isLoading ? 'Api downloading...' : 
    apiData.map((item) => <PokemonOne name={item.name} image={item.image} key={item.id} />)
    }
</div>
<div className=''>
        <button>Prev</button>
        <button>Next</button>
    </div>
    </>
  );
}

export default PokemonList;
