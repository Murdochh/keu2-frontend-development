import React from 'react';

const Filter = (props) =>{

    return(
        <div className="filter-container">
        <h1>Filter by Type</h1>
    <div className="filterbar">
        <button className="type-button normal" value='normal' onClick={props.onFilterClick}>Normal</button>
        <button className="type-button fire" value='fire' onClick={props.onFilterClick}>Fire</button>
        <button className="type-button water" value='water' onClick={props.onFilterClick}>Water</button>
        <button className="type-button grass" value='grass' onClick={props.onFilterClick}>Grass</button>
        <button className="type-button electric" value='electric' onClick={props.onFilterClick}>Electric</button>
        <button className="type-button ice" value='ice' onClick={props.onFilterClick}>Ice</button>
        <button className="type-button fighting" value='fighting' onClick={props.onFilterClick}>Fighting</button>
        <button className="type-button poison" value='poison' onClick={props.onFilterClick}>Poison</button>
        <button className="type-button ground" value='ground' onClick={props.onFilterClick}>Ground</button>
        <button className="type-button psychic" value='psychic' onClick={props.onFilterClick}>Psychic</button>
        <button className="type-button bug" value='bug' onClick={props.onFilterClick}>Bug</button>
        <button className="type-button rock" value='rock' onClick={props.onFilterClick}>Rock</button>
        <button className="type-button ghost" value='ghost' onClick={props.onFilterClick}>Ghost</button>
        <button className="type-button dark" value='dark' onClick={props.onFilterClick}>Dark</button>
        <button className="type-button dragon" value='dragon' onClick={props.onFilterClick}>Dragon</button>
        <button className="type-button steel" value='steel' onClick={props.onFilterClick}>Steel</button>
    </div>
        <button className="clear-button" onClick={props.onFilterClick}>Clear Filter</button>
    </div>
    )
}

export default Filter;