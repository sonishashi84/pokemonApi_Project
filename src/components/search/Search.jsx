import React from "react";
import "./Search.css"
function Search(){
    return (
        <div className="search-container">
        <input type="text" placeholder="Search Pokemon...." className="search-input" id="search" />
        </div>
    )
}

export default Search;