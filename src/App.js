import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/ui/Header.js'
import PokemonGrid from './components/pokemons/PokemonGrid';
import SearchBar from './components/ui/SearchBar';
import Filter from './components/ui/Filter';

const App = () => {

const [items, setItems] = useState([])
const [loadMore, setLoadMore] = useState(`https://pokeapi.co/api/v2/pokemon?limit=150`)
const [query, setQuery] = useState('')
const [ptype, setpType] = useState('')


const fetchPokemons = async () => {
  const res = await fetch(loadMore)
  const data = await res.json()

  setLoadMore(data.next)

  function createObject (results) {
    results.forEach(async(pokemon) => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
      const data = await res.json()

      setItems(currentList => [...currentList, data])
    })
  }

  createObject(data.results)

}

useEffect(() => {
  fetchPokemons()
}, [])


const filterHandler = (el) => {

  const buttonValue = el.target.value
  console.log(buttonValue)
  setpType(buttonValue)
  
}

  return ( 
  
    <div className="wrapper">
      <Header/>
      <Filter onFilterClick={filterHandler}/>
      <SearchBar getQuery={(q) => setQuery(q)}/>
      <PokemonGrid items={items} query={query} ptype={ptype}></PokemonGrid>
    <div className="container-wrapper">
    <button className="load-more" onClick={() => fetchPokemons()}>Load Next Generation</button>

  </div> 
  </div>
    );
}

export default App;
