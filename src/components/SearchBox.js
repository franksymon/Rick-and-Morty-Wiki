import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const SearchBox = ({setlocation}) => {
    
    const [searchTypeId, setSearchTypeId ] = useState ()
    
    const searchId  = () =>{
        // Peticion de busqueda con Id ingresado al input por el usuario
        axios.get(`https://rickandmortyapi.com/api/location/${searchTypeId}/`)
            .then(res => {
                //console.log(res.data)
                setlocation(res.data)
                 
            })
        
    }
    
    return (
        <div className='input-search-location'>
            <input 
                type="text" 
                onChange={ e => setSearchTypeId(e.target.value)} 
                value={searchTypeId} 
                placeholder = {"type a location"}
            />
            <button onClick={searchId}>
                Search
            </button>
        </div>
    );
};

export default SearchBox;