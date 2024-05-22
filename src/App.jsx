import './App.css'
import React from "react";
import Pokedex from './components/pokedex/Pokedex';
import Search from './components/search/Search';
import PokemonList from './components/pokedex/PokemonList';
function App() {

  return (
    <>
    <Pokedex />
    <Search />
    <PokemonList />
    </>
  )
}

export default App;
