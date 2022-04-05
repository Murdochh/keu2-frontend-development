import React from 'react';
import PokemonCard from './PokemonCard.js';

const PokemonGrid = ({items, query, ptype,}) => {
    
    if (ptype === ''){
    return(

        <div className='pokemon-container'>
        {items.filter((pokemon)=>pokemon.name.toLowerCase().includes(query)).sort((a,b) => a.id >b.id? 1 :-1).map( 
        (pokemon, index) => 
        <PokemonCard 
        id={pokemon.id}
        name={pokemon.name}
        image={pokemon.sprites.front_default}
        secondaryImage={pokemon.sprites.back_default}
        height={pokemon.height}
        weight={pokemon.weight}
        type={pokemon.types[0].type.name}
        hp={pokemon.stats[0]}
        attack={pokemon.stats[1]}
        defense={pokemon.stats[2]}
        specialAttack={pokemon.stats[3]}
        specialDefense={pokemon.stats[4]}
        speed={pokemon.stats[5]}
        key={index}
        />)}

    
        </div>
    );
        }
        else
        return(
        <div className='pokemon-container'>
        {items.filter((pokemon)=>pokemon.types[0].type.name.toLowerCase().includes(ptype)).sort((a,b) => a.id >b.id? 1 :-1).map( 
        (pokemon, index) => 
        <PokemonCard 
        id={pokemon.id}
        name={pokemon.name}
        image={pokemon.sprites.front_default}
        secondaryImage={pokemon.sprites.back_default}
        height={pokemon.height}
        weight={pokemon.weight}
        type={pokemon.types[0].type.name}
        key={index}
        hp={pokemon.stats[0]}
        attack={pokemon.stats[1]}
        defense={pokemon.stats[2]}
        specialAttack={pokemon.stats[3]}
        specialDefense={pokemon.stats[4]}
        speed={pokemon.stats[5]}
        />)}
        </div>
        )
}

export default PokemonGrid;