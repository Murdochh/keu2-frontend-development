import React, {useState, useRef} from 'react';

const SearchBar = ({getQuery,}) => {

    const [text, setText] = useState('')

    const onChange = (q) => {
        setText(q)
        getQuery(q)
    }
    return(
        <input
        type="text"
        placeholder="Search for a Pokemon..."
        className="search"
        onChange={(e)=>onChange(e.target.value)}></input>
    )
}

export default SearchBar;