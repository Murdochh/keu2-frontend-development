import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/ui/Header.js'
import PokemonGrid from './components/pokemons/PokemonGrid';
import SearchBar from './components/ui/SearchBar';
import Filter from './components/ui/Filter';

const App = () => {
//Setting the intial items so the API can override with State
const [items, setItems] = useState([])
//State used for API
const [loadMore, setLoadMore] = useState(`https://pokeapi.co/api/v2/pokemon?limit=150`) 
//State used for Search Function
const [query, setQuery] = useState('')
//State used to filter on Pokemon Type
const [ptype, setpType] = useState('')

//Fetch API
const fetchPokemons = async () => {
  const res = await fetch(loadMore)
  const data = await res.json()

  setLoadMore(data.next)

  //Considering everything the API returns is another array with a link, we have to spread the data out into usable results.
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
  //UseEffect to call the function as soon as the page loads, no dependencies.
}, [])

//Function created to look at the value of the Filter Button, in order to set the pType correspondingly and conditionally render results.
const filterHandler = (el) => {

  const buttonValue = el.target.value
  console.log(buttonValue)
  setpType(buttonValue)
  
}
//Returning the individual components
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
