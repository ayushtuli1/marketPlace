import "../App.css";
import { useEffect, useState } from "react";

export default function SearchBar(props) {
    const { searchQuery } = props;
    
    return (
        <div >
            <label htmlFor="header-search">
            <span className="visually-hidden">Search Products</span>
            </label>
            <input
                onChange={(event) => searchQuery(event.target.value)}
                type="text"
                id="header-search"
                placeholder="Search Products"
                name="s" 
            />
        </div>
    )
}

