import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const ResidentInfo = ({residentUrl}) => {
   

    const [resident, setResident] = useState ({})

   useEffect(()=>{
    axios.get(residentUrl)
        .then(res => {
            setResident(res.data)
            console.log(res.data)
        })

    //Si se consume desde una props hay que pasarlo al arrego de depemdencia
   },[residentUrl])
   
   
   
    return (
        <article className='card-resident'>
            <div className='image-resident'>
                <img src={resident.image} alt="" />
            </div>
            <div className='info-resident'>
                <h4>{resident.name}</h4>
                <p>{resident.status}</p>
                <small>Origin</small>
                <p>{resident.origin?.name}</p>
                <small>Episodes where appear</small>
                <p>{resident.episode?.length}</p>
            </div>
        </article>
    );
};

export default ResidentInfo;