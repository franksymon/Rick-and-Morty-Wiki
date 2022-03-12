import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';
import SearchBox from './SearchBox';
import ResidentsList from './ResidentsList';


const LocationInfo = () => {
    
    const [location, setlocation] = useState ({})

    useEffect(()=>{
        const random = Math.floor(Math.random() * 126) + 1
        axios.get(`https://rickandmortyapi.com/api/location/${random}`)
            .then(res => {
                console.log(res)
                setlocation(res.data)
            })

    },[])
    
    return (
        <section className='container-app' id='location'>
            <article className='location-content'>
                <SearchBox setlocation={setlocation}/>
                <h2>{location.name}</h2>
                <div className='location-info'>
                    <p><b>Type | </b>{location.type}</p>
                    <p><b>Dimension | </b>{location.dimension}</p>
                    <p><b>Population | </b>{location.residents?.length}</p>
                </div>
            </article>
             
            <ResidentsList resident= {location.residents}/>
            
        </section>
    );
};

export default LocationInfo;