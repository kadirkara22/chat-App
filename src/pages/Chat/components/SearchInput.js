import React from 'react'

import "../ChatPage.css"

function SearchInput({
    searchText,
    handleOnChange}) {


    return (
        <div className="searcInput">
          <input type="text"
           className="inputName"
            placeholder="Searh..."
            onChange={(event)=>{
                handleOnChange(event.target.value);
            }} />
        </div>
    )
}

export default SearchInput;
